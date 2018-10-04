const testHelper = require('../../helpers/test-helper');

describe('Groups id page', function(){
  testHelper.setupBefore();

  it('should render content for proposed negative statutory instruments id page', function(done){
    testHelper.shunterTest('12345678', 'layout', 'groups', done, true);
  });

});
