const testHelper = require('../../helpers/test-helper');

describe('Search index page', function(){
  testHelper.setupBefore()

  it('should render content for search index page', function(done){
    testHelper.shunterTest('index_page', 'layout', 'integration/search', done)
  });

  it('when not given a title should render defalt content for search index page', function(done){
    testHelper.shunterTest('index_page_no_title', 'layout', 'integration/search', done)
  });

});
