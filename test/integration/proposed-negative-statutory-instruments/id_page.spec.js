const testHelper = require('../../helpers/test-helper');

describe('Proposed Negative Statutory Instruments id page', function(){
  testHelper.setupBefore();

  it('should render content for proposed negative statutory instruments id page', function(done){
    testHelper.shunterTest('12345678', 'layout', 'proposed-negative-statutory-instruments', done, true);
  });
});
