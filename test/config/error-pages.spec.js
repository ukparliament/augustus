const expect = require('chai').expect;

const {
  errorPagesConfig,
  handleError,
  getStaticDataPath
} = require('../../config/error-pages');

describe('error-pages.js', () => {

  let expected;

  describe('errorPagesConfig()', function() {

    describe('status 404', function() {

      beforeEach(function() {
        expected = errorPagesConfig(['404']);
      });

      it('should convert status code 404 to default', function() {
        expect(expected.errorLayouts).to.have.property('default');
      });

      it('should use template layout-error-404', function() {
        expect(expected.errorLayouts['default']).to.equal('layout-error-404');
      });

      it('should have correct page title', function() {
        expect(expected.staticData['layout-error-404'].meta.title).to.equal(
          'The page you were looking for doesn\'t exist (404) - UK Parliament'
        );
      });
    });

    describe('status 500', function() {

      beforeEach(function() {
        expected = errorPagesConfig(['500']);
      });

      it('should use template layout-error-500', function() {
        expect(expected.errorLayouts['500']).to.equal('layout-error-500');
      });

      it('should have correct page title', function() {
        expect(expected.staticData['layout-error-500'].meta.title).to.equal(
          'We\'re sorry, but something went wrong (500) - UK Parliament'
        );
      });
    });

    describe('status 502', function() {

      beforeEach(function() {
        expected = errorPagesConfig(['502']);
      });

      it('should use template layout-error-502', function() {
        expect(expected.errorLayouts['502']).to.equal('layout-error-502');
      });

      it('should have correct page title', function() {
        expect(expected.staticData['layout-error-502'].meta.title).to.equal(
          'We\'re sorry, but something went wrong (502) - UK Parliament'
        );
      });
    });
  });

  describe('handleError()', function() {

    describe('status 404', function() {

      beforeEach(function() {
        expected = handleError('404');
      });

      it('should contain the correct title', function() {
        expect(expected.meta.title).to.equal(
          'The page you were looking for doesn\'t exist (404) - UK Parliament'
        );
      });

    });

    describe('status 500', function() {

      beforeEach(function() {
        expected = handleError('500');
      });

      it('should contain the correct title', function() {
        expect(expected.meta.title).to.equal(
          'We\'re sorry, but something went wrong (500) - UK Parliament'
        );
      });

    });

    describe('status 502', function() {

      beforeEach(function() {
        expected = handleError('502');
      });

      it('should contain the correct title', function() {
        expect(expected.meta.title).to.equal(
          'We\'re sorry, but something went wrong (502) - UK Parliament'
        );
      });

    });

    describe('status 600', function() {

      beforeEach(function() {
        try {
          expected = handleError('600');
        } catch(error) {
          expected = error.message;
        }
      });

      it('should throw the correct error message', function() {
        expect(expected).to.equal(
          '\'handleError\' does not support the HTTP status code 600'
        );
      });

    });

  });

  describe('getStaticDataPath()', function() {

    describe('status 404', function() {

      beforeEach(function() {
        expected = getStaticDataPath('404');
      });

      it('should return the correct static data path', function() {
        expect(expected).to.equal('../data/website/error-pages/404.json');
      });

    });

  });

});
