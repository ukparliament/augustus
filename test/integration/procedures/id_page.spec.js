const testHelper = require('../../helpers/test-helper');

describe('Procedures id page', function(){
  testHelper.setupBefore();

  it('should render content for procedures id page', function(done){
    testHelper.shunterTest('12345678', 'layout', 'procedures', done, true);
  });
});
