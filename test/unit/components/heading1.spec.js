const testHelper = require('../../helpers/test-helper');

describe('Heading1 dust component', function() {
  testHelper.setupBefore()

  it('when given only a heading with translation key, should return html from the dust component', function(done) {
    testHelper.shunterTest('heading1-heading-translation', 'components__heading1', 'components', done)
  });

  it('when given only a heading with translation key and data to feed into the translation, should return html from the dust component', function(done) {
    testHelper.shunterTest('heading1-heading-translation-data', 'components__heading1', 'components', done)
  });

  it('when given a string heading and context with translation key, should return html from the dust component', function(done) {
    testHelper.shunterTest('heading1-context-translation', 'components__heading1', 'components', done)
  });

  it('when given a string heading and context with translation key it is hiden, should return html from the dust component', function(done) {
    testHelper.shunterTest('heading1-context-translation-hiden', 'components__heading1', 'components', done)
  });

  it('when given a string heading and context with translation key and data to feed into the translation, should return html from the dust component', function(done) {
    testHelper.shunterTest('heading1-context-translation-data', 'components__heading1', 'components', done)
  });

  it('when given a string heading, string context and a subheading with translation key, should return html from the dust component', function(done) {
    testHelper.shunterTest('heading1-subheading-translation', 'components__heading1', 'components', done)
  });

  it('when given a string heading, string context and a subheading with translation key and data to feed into the translation, should return html from the dust component', function(done) {
    testHelper.shunterTest('heading1-subheading-translation-data', 'components__heading1', 'components', done)
  });

  it('when given a string heading, string context and string subheading, should return html from the dust component', function(done) {
    testHelper.shunterTest('heading1-subheading-string', 'components__heading1', 'components', done)
  });


});
