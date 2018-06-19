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

  it('should render content for search index page', function(done){
    const jsonFixture = fixtureHelper.getFixture('index_page', 'json');

    shunterTestHelper.render('layout', jsonFixture, function(error, dom, output){
      const expectedHTML = fixtureHelper.getFixture('index_page', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });
});
