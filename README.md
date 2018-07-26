# Augustus
[Augustus][augustus] is a proposed front-end prototype for [beta.parliament.uk][beta]. It's built on [Shunter][shunter], with our components library [Pugin][pugin].

[![Build Status][shield-travis]][info-travis] [![Test Coverage][shield-coveralls]][info-coveralls] [![License][shield-license]][info-license]

### Contents
<!-- START doctoc -->
<!-- END doctoc -->

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

## Adding Pugin Components
You can add your own view files containing components; however, to access the Pugin Components view files you need to add the [pugin components npm][pugin-components] package to your dependencies.   

```bash
npm install --save-dev pugin-components
```   
Once installed it should appear in your node_modules file.

## i18n Note
Please note, that while normally data would be passed into a string in a translation file using double moustaches which sanitises input, when passing in a URL or other form of content which you do not wish to be sanitised you must use triple moustaches or it will not be rendered correctly in the output.  
Example:  
`"cookie-policy": "<a href='{{{link}}}'>Cookie Policy</a>"`  
Will be rendered correctly as:  
`<a href='/meta/cookie'>Cookie Policy</a>`

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
[pugin]: https://github.com/ukparliament/parliament.uk-pugin
[node]: https://nodejs.org/
[node-version]: https://github.com/ukparliament/augustus/blob/master/.node-version
[npm]: https://www.npmjs.com/
[local]: http://localhost:5400
[pugin-components]: https://www.npmjs.com/package/pugin-components
[mocha]: https://mochajs.org/

[info-travis]:   https://travis-ci.org/ukparliament/augustus
[shield-travis]: https://img.shields.io/travis/ukparliament/augustus.svg

[info-coveralls]:   https://coveralls.io/github/ukparliament/augustus
[shield-coveralls]: https://img.shields.io/coveralls/ukparliament/augustus.svg

[info-license]:   https://github.com/ukparliament/augustus/blob/master/LICENSE
[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg
