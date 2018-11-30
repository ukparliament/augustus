const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Statutory Instruments index page', function(){
  testHelper.setupBefore();

  it('should render content for statutory instruments index page', function(done){
    testHelper.shunterTest('index', 'layout', '_website/statutory-instruments', done, true);
  });

});
