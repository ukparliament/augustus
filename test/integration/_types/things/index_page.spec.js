const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Types > Things', function(){
  testHelper.setupBefore();

  it('should render content for things index page', function(done){
    testHelper.shunterTest('index', 'layout', '_types/things', done, true);
  });
});
