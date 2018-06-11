const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../helpers/fixture-helper');
const paths = require('../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Search results page', function(){
  before(function() {
    shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('should render content for search results page', function(done){
    const jsonFixture = fixtureHelper.getJSONFixture('results_page');

    shunterTestHelper.render('layout', jsonFixture, function(error, dom, output){
      const expectedHTML = fixtureHelper.getHTMLFixture('results_page');
      console.log(b(expectedHTML))
console.log(b(output))
      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });
});
