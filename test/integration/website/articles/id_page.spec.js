const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Articles id page', function(){
  testHelper.setupBefore();

  it('should render content for articles id page', function(done){
    testHelper.shunterTest('12345678', 'layout', 'website/articles', done, true);
  });
});
