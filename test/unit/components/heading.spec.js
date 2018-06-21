const testHelper = require('../../helpers/test-helper');

describe('Heading dust component', function() {
  testHelper.setupBefore()

  it('when given a translation, should return html from the dust component', function(done) {
    testHelper.shunterTest('heading-translation', 'components__heading', 'components', done)
  });

  it('when given a string, should return html from the dust component', function(done){
    testHelper.shunterTest('heading-string', 'components__heading', 'components', done)
  });

});
