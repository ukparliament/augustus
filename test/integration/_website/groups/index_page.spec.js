const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Groups index page', function(){
  testHelper.setupBefore();

  it('should render content for groups index page', function(done){
    testHelper.shunterTest('index', 'layout', '_website/groups', done, true);
  });
});
