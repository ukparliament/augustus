const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Proposed Negative Statutory Instruments id page', function(){
  testHelper.setupBefore();

  it('should render content for proposed negative statutory instruments id page', function(done){
    testHelper.shunterTest('12345678', 'layout', 'website/proposed-negative-statutory-instruments', done, true);
  });
});
