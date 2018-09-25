const testHelper = require('../../helpers/test-helper');

describe('Groups index page', function(){
  testHelper.setupBefore();

  it('should render content for proposed negative statutory instruments index page', function(done){
    testHelper.shunterTest('index', 'layout', 'groups', done, true);
  });

});
