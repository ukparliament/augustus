const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Statutory Instruments id page', function(){
  testHelper.setupBefore();

  it('should render content for statutory instruments id page', function(done){
    testHelper.shunterTest('12345678', 'layout', '_website/statutory-instruments', done, true);
  });
});
