const testHelper = require('../../helpers/test-helper');

describe('Span dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('span', 'components__span', 'components', done)
  });
});
