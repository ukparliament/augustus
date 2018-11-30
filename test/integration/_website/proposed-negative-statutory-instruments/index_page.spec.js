const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Proposed Negative Statutory Instruments index page', function(){
  testHelper.setupBefore();

  it('should render content for proposed negative statutory instruments index page', function(done){
    testHelper.shunterTest('index', 'layout', '_website/proposed-negative-statutory-instruments', done, true);
  });

});
