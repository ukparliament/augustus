const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Home page', function(){
  testHelper.setupBefore();

  it('should render content for home page', function(done){
    testHelper.shunterTest('index', 'layout', '_website/', done, true);
  });
});
