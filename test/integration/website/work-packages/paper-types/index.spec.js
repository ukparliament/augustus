const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Work Packages paper types index page', function(){
  testHelper.setupBefore();

  it('should render content for work packages paper types index page', function(done){
    testHelper.shunterTest('index', 'layout', 'website/work-packages/paper-types', done, true);
  });
});
