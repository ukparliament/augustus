const testHelper = require('../helpers/test-helper');

describe('Home page', function(){
  testHelper.setupBefore();

  it('should render content for home page', function(done){
    testHelper.shunterTest('index_page', 'layout', 'integration', done);
  });
});
