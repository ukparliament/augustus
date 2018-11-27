const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Types > Utilties', function(){
  testHelper.setupBefore();

  it('should render content for utilities index page', function(done){
    testHelper.shunterTest('index', 'layout', '_types/utilities', done, true);
  });
});
