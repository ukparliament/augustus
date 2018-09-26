# Augustus
[Augustus][augustus] is a front-end application for [beta.parliament.uk][beta]. It's built on [Shunter][shunter], with our components library [Pugin][pugin].

[![Build Status][shield-travis]][info-travis] [![Test Coverage][shield-coveralls]][info-coveralls] [![License][shield-license]][info-license]

### Contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Requirements](#requirements)
- [Quick start](#quick-start)
- [Running the application](#running-the-application)
- [Using components](#using-components)
- [Starting Augustus and Shunter serve in a Docker Image](#starting-augustus-and-shunter-serve-in-a-docker-image)
- [Running tests on single files or directories](#running-tests-on-single-files-or-directories)
- [i18next Note](#i18next-note)
  - [Double moustaches](#double-moustaches)
  - [Prefixing the variable name with a hyphen](#prefixing-the-variable-name-with-a-hyphen)
- [Contributing](#contributing)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Requirements
[Augustus][augustus] requires the following:
* [NodeJS][node] - [click here][node-version] for the exact version
* [NPM][npm]

## Quick start
```bash
git clone https://github.com/ukparliament/augustus.git
cd augustus
npm install
npm cache clean --force && npm test
```

## Running the application
To run the application locally, open 2 terminal shells. In one run:

```bash
npm cache clean --force && node app.js
```
To run the app.

In the other shell run:

```bash
node_modules/.bin/shunter-serve
```
To run the shunter serve.

The application should now be available at [http://localhost:5400][local].

## Using components
[Augustus][augustus] uses [Pugin][pugin] as its components library which uses the [Dust][dust] templating language. However, you can use your own [Dust][dust] components by placing them in the `view` directory in the project's root. You can refer to the [Shunter templating documentation][shunter-templating-docs] for more information on how to do this.

## Starting Augustus and Shunter serve in a Docker Image   
If you wish to run Augustus with shunter serve in a docker image in a development environment, use the following commands:  

To build the Docker image  

```bash
docker-compose build --no-cache
```

To run Augustus and Shunter serve  
```bash
docker-compose up
```
The application will then be available from http://localhost/.

## Testing
The test suite can be run using `npm test`.

[Shunter][shunter] comes with test helpers that allow us to test that given some JSON, we render some expected HTML.  The `testHelper` uses `ShunterHelper` to setup and teardown our tests.  

`createFixture` is a helper which will generate HTML fixtures to be used in testing.  For example, to generate an HTML fixture for an integration test:
```bash
testHelper.createFixture('index', 'layout', 'statutory-instruments', true)
```
This would generate an HTML fixture named index.html which would be located at test/fixtures/html/integration/statutory-instruments/.
It would be generated from the JSON file index.json located at data/statutory-instruments/.

For a unit test an example could be:
```bash
testHelper.createFixture('index', 'layout', 'statutory-instruments', false)
```
This would generate an HTML fixture name index.html which would be located at test/fixtures/html/statutory-instruments/.  It would be generated from the JSON file index.json located at data/fixtures/json/statutory-instruments/.

### Running tests on single files or directories
The `npm run testfocus` command will let you specify a directory or file of tests to be run.

For example, to run one test:
```bash
npm run testfocus test/integration/index_page.spec.js
```

Or to run a directory of tests:
```bash
npm run testfocus test/integration/
```

## i18next Note
Passing in data to the translation with double moustaches sanitises input. If you wish to pass in a URL or other data that you do not wish to be sanitised, for it be rendered correctly you must prefix the variable name with a hyphen. For example:

### Double moustaches
The following translation:
```json
"cookie-policy": "<a href='{{link}}'>Cookie Policy</a>"
```  
Will be rendered incorrectly as:  
```html
<a href='*&meta*&cookie'>Cookie Policy</a>
```  

### Prefixing the variable name with a hyphen
The following translation:
```json
"cookie-policy": "<a href='{{-link}}'>Cookie Policy</a>"
```
Will be rendered correctly as:  
```html
<a href='/meta/cookie'>Cookie Policy</a>
```

## Contributing
If you wish to submit a bug fix or feature, you can create a pull request and it will be merged pending a code review.

1. Fork the repository
1. Create your feature branch (`git checkout -b my-new-feature`)
1. Commit your changes (`git commit -am 'Add some feature'`)
1. Push to the branch (`git push origin my-new-feature`)
1. Ensure your changes are tested using [Mocha][mocha]
1. Create a new Pull Request

## License
[Augustus][augustus] is licensed under the [MIT][info-license].

[augustus]: https://github.com/ukparliament/augustus
[beta]: https://beta.parliament.uk
[shunter]: https://github.com/springernature/shunter
[pugin]: https://github.com/ukparliament/pugin-components
[dust]: http://www.dustjs.com/
[node]: https://nodejs.org/
[node-version]: https://github.com/ukparliament/augustus/blob/master/.nvmrc
[npm]: https://www.npmjs.com/
[local]: http://localhost:5400
[pugin-components]: https://www.npmjs.com/package/pugin-components
[mocha]: https://mochajs.org/
[shunter-templating-docs]: https://shunter.readthedocs.io/en/latest/usage/templates/

[info-travis]:   https://travis-ci.org/ukparliament/augustus
[shield-travis]: https://img.shields.io/travis/ukparliament/augustus.svg

[info-coveralls]:   https://coveralls.io/github/ukparliament/augustus
[shield-coveralls]: https://img.shields.io/coveralls/ukparliament/augustus.svg

[info-license]:   https://github.com/ukparliament/augustus/blob/master/LICENSE
[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg
