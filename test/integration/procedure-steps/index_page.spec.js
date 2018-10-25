const testHelper = require('../../helpers/test-helper');

describe('Procedure steps index page', function(){
  testHelper.setupBefore();

  it('should render content for procedure steps index page', function(done){
    testHelper.shunterTest('index', 'layout', 'procedure-steps', done, true);
  });
});
