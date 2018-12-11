const testHelper = require(process.cwd() + '/test/helpers/test-helper');
const shunterTestHelper = require('shunter').testhelper();

describe('Search results pages', function(){
  testHelper.setupBefore();

  context('first page', function(){
    it('should render the expected HTML', function(done){
      testHelper.shunterTest('q', 'layout', 'website/search', done, true);
    });
  });

  context('nth page', function(){
    it('should render the expected HTML', function(done){
      testHelper.shunterTest('count_q_start_index', 'layout', 'website/search', done, true);
    });
  });
});
