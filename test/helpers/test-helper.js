const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('./fixture-helper');
const paths = require('./walk-helper');
const expect = require('chai').expect;

const b = require('js-beautify').html;

module.exports = {
  /**
  * This function sets up the paths before each test is run.
  * It then tears down the set up for each test to ensure that the tests do not interfere with each other.
  */
  setupBefore: function(){
    beforeEach(function() {
      shunterTestHelper.setup(paths);
    });

    afterEach(function() {
      shunterTestHelper.teardown();
    });
  },

  /**
  * This function gets the contents of the json and html fixture files, runs the json through the appropriate file and then checks the output against the expected html.
  * To do this it takes in the name of the fixture file, the name of the dust file to be rendered, the location of the fixtures and done as parameters.
  *
  * @param fileName [string] The fixture file name i.e. '404.json' would have filename '404'
  * @param layout [string] Name of the layout to render and pass our data to
  * @param fixtureLocation [string|null] The directory within our fixtures folder to look for our file i.e. 'test/fixtures/integration/html/error-pages/4xx/404.html' would have the fixtureLocation 'error-pages/4xx'
  * @param done [function] Callback function used to let mocha know we are finished
  * @param integrationTest [boolean] Are we getting an integration test fixture. Used specifically to get JSON fixtures from the root data directory.
  */
  shunterTest: function(fileName, layout, fixtureLocation, done, integrationTest){
    const jsonFixture  = fixtureHelper.getFixture(fileName, 'json', fixtureLocation, integrationTest);

    shunterTestHelper.render(layout, jsonFixture, function(error, dom, output){
      let htmlFixture = fixtureLocation;

      if(integrationTest) {
        var newFixtureLocation = 'integration';
        if(fixtureLocation) {
          newFixtureLocation += `/${fixtureLocation}`;
        }

        htmlFixture = newFixtureLocation;
      }

      const expectedHTML = fixtureHelper.getFixture(fileName, 'html', htmlFixture, false);

      expect(b(expectedHTML)).to.equal(b(output));

      done();
    });
  }
};
