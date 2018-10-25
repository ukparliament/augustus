const testHelper = require('../../../../helpers/test-helper');

describe('Procedure step work packages index page', function(){
  testHelper.setupBefore();

  it('should render content for the procedure step work packages index page', function(done){
    testHelper.shunterTest('index', 'layout', 'procedure-steps/12345678/work-packages', done, true);
  });
});
