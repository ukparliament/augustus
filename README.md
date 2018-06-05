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
npm test
```

## Running the application
To run the application locally, run:

```bash
npm cache clean --force && node app.js
```

The application should now be available at [http://localhost:5400][local].

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
[mocha]: https://mochajs.org/

[info-travis]:   https://travis-ci.org/ukparliament/augustus
[shield-travis]: https://img.shields.io/travis/ukparliament/augustus.svg

[info-coveralls]:   https://coveralls.io/github/ukparliament/augustus
[shield-coveralls]: https://img.shields.io/coveralls/ukparliament/augustus.svg

[info-license]:   https://github.com/ukparliament/augustus/blob/master/LICENSE
[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg
