const testHelper = require('../../helpers/test-helper');

describe('Error pages', () => {
  testHelper.setupBefore();

  it('should render the 500 page', (done) => {
    testHelper.shunterTest('500', 'layout-error-500', 'error-pages', done, true);
  })
})
