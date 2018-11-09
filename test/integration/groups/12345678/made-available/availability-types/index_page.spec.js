const testHelper = require('../../../../../helpers/test-helper');

describe('Group made available availability types index page', function(){
  testHelper.setupBefore();

  it('should render content for the group made available availability types index page', function(done){
    testHelper.shunterTest('index', 'layout', 'groups/12345678/made-available/availability-types', done, true);
  });
});
