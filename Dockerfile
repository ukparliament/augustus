FROM node:10.13.0-alpine

# Add command line argument variables used to customise the image at build-time.

ARG AIRBRAKE_PROJECT_ID
ARG AIRBRAKE_PROJECT_KEY
ARG BANDIERA_URL
ARG APPLICATION_INSIGHTS_INSTRUMENTATION_KEY
ARG NODE_ENV=production
ARG SPAWN_WRAP_SHIM_ROOT=/app
ARG PRODUCTION_LOGGING

# Add package.json.
ADD package.json /app/
ADD package-lock.json /app/

# Set the working DIR.
WORKDIR /app

# Install system and application dependencies.
RUN echo "Environment (NODE_ENV): $NODE_ENV" && npm install

# Copy the application onto our image.
ADD . /app

# Compile static assets
RUN ./node_modules/.bin/shunter-build -r pugin-components

# Make sure our user owns the application directory.
RUN chown -R nobody:nogroup /app

# Set up our user and environment
USER nobody
ENV AIRBRAKE_PROJECT_ID $AIRBRAKE_PROJECT_ID
ENV AIRBRAKE_PROJECT_KEY $AIRBRAKE_PROJECT_KEY
ENV BANDIERA_URL $BANDIERA_URL
ENV APPLICATION_INSIGHTS_INSTRUMENTATION_KEY $APPLICATION_INSIGHTS_INSTRUMENTATION_KEY
ENV NODE_ENV $NODE_ENV
ENV SPAWN_WRAP_SHIM_ROOT $SPAWN_WRAP_SHIM_ROOT
ENV PRODUCTION_LOGGING $PRODUCTION_LOGGING


# Add additional labels to our image
ARG GIT_SHA=unknown
ARG GIT_TAG=unknown
LABEL git-sha=$GIT_SHA \
	    git-tag=$GIT_TAG \
	    rack-env=$RACK_ENV \
	    maintainer=mattrayner1@gmail.com

# Expose port 5400
EXPOSE 5400

# Setup a health check
HEALTHCHECK --interval=5s --timeout=3s CMD curl --fail http://localhost:5400/health-check || exit 1

# Launch puma
CMD ["npm", "start"]
