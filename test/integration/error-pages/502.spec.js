const testHelper = require('../../helpers/test-helper');

describe('Error pages', () => {
  testHelper.setupBefore();

  it('should render the 502 page', (done) => {
    testHelper.shunterTest('502', 'layout-error-502', 'error-pages', done, true);
  })
})
