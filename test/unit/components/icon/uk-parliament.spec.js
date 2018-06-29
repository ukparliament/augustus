const testHelper = require('../../../helpers/test-helper');

describe('UK Parliament icon dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('uk-parliament', 'components__icon__uk-parliament', 'components/icon', done)
  });
});
