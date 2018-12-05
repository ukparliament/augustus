.PHONY: build run test push scan-image rmi deploy-ecs airbrake

##
# Makefile used to build, test and (locally) run the parliament.uk-prototype project.
##

##
# ENVIRONMENT VARIABLES
#   We use a number of environment  variables to customer the Docker image createad at build time. These are set and
#   detailed below.
##

# App name used to created our Docker image. This name is important in the context of the AWS docker repository.
APP_NAME = augustus

# AWS account ID used to create our Docker image. This value is important in the context of the AWS docker repository.
# When executed in GoCD, AWS_ACCOUNT_ID may be set by an environment variable
AWS_ACCOUNT_ID ?= $(or $(shell aws sts get-caller-identity --output text --query "Account" 2 > /dev/null), unknown)

# A counter that represents the build number within GoCD. Used to tag and version our images.
GO_PIPELINE_COUNTER ?= unknown

# Which Rack environment will our docker image be configured to run in?
RACK_ENV ?= development

# VERSION is used to tag the Docker images
VERSION = 0.0.$(GO_PIPELINE_COUNTER)

# ECS related variables used to build our image name
# Cluster: list all clusters to update, separated by semicolons
ECS_CLUSTER = ecs-routing
AWS_REGION = eu-west-1

# Tenable.io
TENABLEIO_USER ?= user # passed from an envvar in the CDP
TENABLEIO_PASSWORD ?= password # passed from an envvar in the CDP
TENABLEIO_REGISTRY = cloud.flawcheck.com
TENABLEIO_REPO = web1live

# Airbrake.io
AIRBRAKE_PROJECT_ID = $(shell credstash get augustus/airbrake_id)
AIRBRAKE_PROJECT_KEY = $(shell credstash get augustus/airbrake_key)
AIRBRAKE_ENVIRONMENT = $(RACK_ENV)
AIRBRAKE_REPOSITORY = https://github.com/ukparliament/augustus
GIT_SHA = $(or $(GO_REVISION), unknown)
GIT_TAG = $(or $(shell git describe --tags --exact-match 2> /dev/null), unknown)
AWS_ACCOUNT ?= unknown

GTM_KEY = $(shell credstash get common/gtm_key)
SECRET_KEY_BASE = $(shell credstash get common/secret_key_base)

# The name of our Docker image
IMAGE = $(AWS_ACCOUNT_ID).dkr.ecr.$(AWS_REGION).amazonaws.com/$(APP_NAME)

# Container port used for mapping when running our Docker image.
CONTAINER_PORT = 5400

# Host port used for mapping when running our Docker image.
HOST_PORT = 80

##
# MAKE TASKS
#   Tasks used locally and within our build pipelines to build, test and run our Docker image.
##

GITHUB_API=https://api.github.com
ORG=ukparliament
REPO=augustus
LATEST_REL=$(GITHUB_API)/repos/$(ORG)/$(REPO)/releases
REL_TAG=$(shell curl -s $(LATEST_REL) | jq -r '.[0].tag_name')

checkout_to_release:
	git checkout -b release $(REL_TAG)

build: # Using the variables defined above, run `docker build`, tagging the image and passing in the required arguments.
	docker build -t $(IMAGE):$(VERSION) -t $(IMAGE):latest \
		--build-arg AIRBRAKE_PROJECT_ID=$(AIRBRAKE_PROJECT_ID) \
		--build-arg AIRBRAKE_PROJECT_KEY=$(AIRBRAKE_PROJECT_KEY) \
		--build-arg BANDIERA_URL=$(BANDIERA_URL) \
		--build-arg APPLICATION_INSIGHTS_INSTRUMENTATION_KEY=$(APPLICATION_INSIGHTS_INSTRUMENTATION_KEY) \
		--build-arg NODE_ENV=$(NODE_ENV) \
		--build-arg GIT_SHA="$(GIT_SHA)" \
		--build-arg GIT_TAG="$(GIT_TAG)" \
		--build-arg SPAWN_WRAP_SHIM_ROOT=$(SPAWN_WRAP_SHIM_ROOT) \
		--build-arg PRODUCTION_LOGGING=$(PRODUCTION_LOGGING) \
		.

run: # Run the Docker image we have created, mapping the HOST_PORT and CONTAINER_PORT
	docker run --rm -p $(HOST_PORT):$(CONTAINER_PORT) $(IMAGE)

develop:
	env PORT=$(CONTAINER_PORT) ./node_modules/foreman/nf.js --procfile ProcfileForeman start

serve:
	npm run serve

test: # Build the docker image in development mode, using a test PARLIAMENT_BASE_URL. Then run rake within a Docker container using our image.
	NODE_ENV=development SPAWN_WRAP_SHIM_ROOT=/app/ make build
	docker run --rm $(IMAGE):latest npm test

json: # Run task to beautify *.json files
	./jsbeautify.sh

lighthouse: # Run audit against app web pages
	./lighthouse.sh

push: # Push the Docker images we have build to the configured Docker repository (Run in GoCD to push the image to AWS)
	docker push $(IMAGE):$(VERSION)
	docker push $(IMAGE):latest

scan-image:
	docker login -u $(TENABLEIO_USER) -p $(TENABLEIO_PASSWORD) $(TENABLEIO_REGISTRY)
	docker tag $(IMAGE):$(VERSION) $(TENABLEIO_REGISTRY)/$(TENABLEIO_REPO)/$(APP_NAME):$(VERSION)
	docker push $(TENABLEIO_REGISTRY)/$(TENABLEIO_REPO)/$(APP_NAME):$(VERSION)

rmi: # Remove local versions of our images.
	docker rmi -f $(IMAGE):$(VERSION)
	docker rmi -f $(IMAGE):latest
	docker images -a | grep "^<none>" | awk '{print $3}' | xargs docker rmi || true

deploy-ecs: # Deploy our new Docker image onto an AWS cluster (Run in GoCD to deploy to various environments).
	./aws_ecs/register-task-definition.sh $(APP_NAME)
	./aws_ecs/update-services.sh "$(ECS_CLUSTER)" "$(APP_NAME)" "$(AWS_REGION)"

airbrake: # Notify Airbrake that we have made a new deployment
	curl -X POST -H "Content-Type: application/json" -d "{ \"environment\":\"${AIRBRAKE_ENVIRONMENT}\", \"username\":\"${AWS_ACCOUNT}\", \"repository\":\"${AIRBRAKE_REPOSITORY}\", \"revision\":\"${GIT_SHA}\", \"version\": \"${GIT_TAG}\" }" "https://airbrake.io/api/v4/projects/${AIRBRAKE_PROJECT_ID}/deploys?key=${AIRBRAKE_PROJECT_KEY}"
