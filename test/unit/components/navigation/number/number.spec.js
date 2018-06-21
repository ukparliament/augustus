const testHelper = require('../../../../helpers/test-helper');

describe('Number navigation dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('number', 'components__navigation__number__number', 'components/navigation/number', done)
  });
});
