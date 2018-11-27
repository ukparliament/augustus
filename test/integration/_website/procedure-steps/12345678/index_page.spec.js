const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Procedure step show page', function(){
  testHelper.setupBefore();

  it('should render content for the procedure step show page', function(done){
    testHelper.shunterTest('index', 'layout', '_website/procedure-steps/12345678', done, true);
  });
});
