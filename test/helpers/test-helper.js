const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('./fixture-helper');
const paths = require('./walk-helper');
const expect = require('chai').expect

const b = require('js-beautify').html;

module.exports = {
  /**
  * This function sets up the paths before each test is ran.
  * It then tears down the set up for each test to ensure that the tests do not interfere with each other.
  */
  setupBefore: function(){
    beforeEach(function() {
      shunterTestHelper.setup(paths);
    });

    afterEach(shunterTestHelper.teardown);
  },
  /**
  * This function gets the contents of the json and html fixture files, runs the json through the appropriate dute file and then checks the output against the expected html.
  * To do this it takes in the name of the fixture file, the name of the dust file to be rendered, the location of the fixtures and done as parameters.
  */
  shunterTest: function(fixture, fileRendered, fixtureLocation, done){
    const jsonFixture = fixtureHelper.getFixture(fixture, 'json', fixtureLocation);

    shunterTestHelper.render(fileRendered, jsonFixture, function(error, dom, output){
      const expectedHTML = fixtureHelper.getFixture(fixture, 'html', fixtureLocation);

      expect(b(expectedHTML)).to.equal(b(output))

      done();
    });
  }
}
