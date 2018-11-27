const testHelper = require('../../helpers/test-helper');

describe('Procedures index page', function(){
  testHelper.setupBefore();

  it('should render content for procedures index page', function(done){
    testHelper.shunterTest('index', 'layout', 'procedures', done, true);
  });
});
