const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Error pages', () => {
  testHelper.setupBefore();

  it('should render the 500 page', (done) => {
    testHelper.shunterTest('500', 'layout-error-500', '_website/error-pages', done, true);
  })
})
