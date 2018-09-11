const testHelper = require('../../helpers/test-helper');

describe('Proposed Negative Statutory Instruments index page', function(){
  testHelper.setupBefore();

  it('should render content for proposed negative statutory instruments index page', function(done){
    testHelper.shunterTest('index', 'layout', 'proposed-negative-statutory-instruments', done, true);
  });

});
