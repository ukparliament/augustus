const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../helpers/fixture-helper');
const paths = require('../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Search index page', function(){
  before(function() {
    shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('should render content for seacrh index page', function(done){
    const jsonFixture = fixtureHelper.getJSONFixture('index_page');

    shunterTestHelper.render('layout', jsonFixture, function(error, dom, output){
      const expectedHTML = fixtureHelper.getHTMLFixture('index_page');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });
});
