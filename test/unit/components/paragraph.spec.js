const testHelper = require('../../helpers/test-helper');

describe('Paragraph dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('paragraph', 'components__paragraph', 'components', done)
  });
});
