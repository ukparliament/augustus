const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const initHelper = require('../../dust/t');
const createTHelper = require('../../dust/t').createTHelper;

chai.use(sinonChai);

describe('translation helper', () => {
  let dust;

  beforeEach(() => {
    dust = {
      helpers: { tap: (param) => { return param } }
    };
  });

  describe('#initHelper', () => {
    it('sets the t helper correctly', () => {
      let tHelper = () => { return 'tHelper'; };

      initHelper(dust, 'paramTwo', 'paramTwo', tHelper);

      expect(dust.helpers.t).to.eq('tHelper');
    })
  });

  describe('#createTHelper', () => {
    let tHelper, chunk, params;

    before(() => {
      tHelper = createTHelper(dust);

      chunk = { write: (param) => { return param } };
    });

    it('returns the right translation when data is provided', () => {
      params = { key: 'shared.header.cookie-banner-text', data: { link: '/some-link' } };

      const expected = 'Parliament.uk uses cookies to make the site simpler. <a href=\'/some-link\'>Find out more about cookies</a>';

      expect(tHelper(chunk, 'ctx', 'bodies', params)).to.eq(expected);
    });

    context('if it is not a translation block', () => {
      it('returns the string without stripping the colon', () => {
        params = { key: 'Some text: with a colon' };

        const expected = 'Some text: with a colon';

        expect(tHelper(chunk, 'ctx', 'bodies', params)).to.eq(expected);
      });
    });
  });
});
