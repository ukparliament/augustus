const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Types', function(){
  testHelper.setupBefore();

  it('should render content for types index page', function(done){
    testHelper.shunterTest('index', 'layout', '_types/', done, true);
  });
});
