const testHelper = require('../../../../helpers/test-helper');

describe('Number navigation card dust component', function() {
  testHelper.setupBefore()

  it('when give active class, should return html from the dust component', function(done) {
    testHelper.shunterTest('card-active', 'components__navigation__number__card', 'components/navigation/number', done)
  });

  it('when not given active class, should return html from the dust component', function(done) {
    testHelper.shunterTest('card-not-active', 'components__navigation__number__card', 'components/navigation/number', done)
  });

});
