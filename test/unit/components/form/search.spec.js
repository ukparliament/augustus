const testHelper = require('../../../helpers/test-helper');

describe('Search form dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('search', 'components__form__search', 'components/form', done)
  });
});
