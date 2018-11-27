const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Groups id page', function(){
  testHelper.setupBefore();

  it('should render content for groups id page', function(done){
    testHelper.shunterTest('12345678', 'layout', '_website/groups', done, true);
  });
});
