const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Error pages', () => {
  testHelper.setupBefore();

  it('should render the 404 page', (done) => {
    testHelper.shunterTest('404', 'layout-error-404', '_website/error-pages', done, true);
  })
});
