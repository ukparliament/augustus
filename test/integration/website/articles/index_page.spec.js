const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Articles index page', function(){
  testHelper.setupBefore();

  it('should render content for articles index page', function(done){
    testHelper.shunterTest('index', 'layout', 'website/articles', done, true);
  });

});
