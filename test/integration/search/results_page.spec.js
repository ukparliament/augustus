const testHelper = require('../../helpers/test-helper');

describe('Search results pages', function(){
  testHelper.setupBefore();

  context('first page', function(){
    it('should render the expected HTML', function(done){
      testHelper.shunterTest('q', 'layout', 'search', done, true)
    });
  });

  context('nth page', function(){
    it('should render the expected HTML', function(done){
      testHelper.shunterTest('count_q_start_index', 'layout', 'search', done, true)
    });
  });


});
