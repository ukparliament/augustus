const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Types > Lists', function(){
  testHelper.setupBefore();

  it('should render content for lists index page', function(done){
    testHelper.shunterTest('index', 'layout', 'types/lists', done, true);
  });
});
