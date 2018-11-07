const testHelper = require('../../../helpers/test-helper');

describe('Work Packages paper types index page', function(){
  testHelper.setupBefore();

  it('should render content for work packages paper types index page', function(done){
    testHelper.shunterTest('index', 'layout', 'work-packages/paper-types', done, true);
  });
});
