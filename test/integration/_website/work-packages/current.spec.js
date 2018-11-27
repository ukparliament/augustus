const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Work Packages current page', function(){
  testHelper.setupBefore();

  it('should render content for work packages current page', function(done){
    testHelper.shunterTest('current', 'layout', '_website/work-packages', done, true);
  });
});
