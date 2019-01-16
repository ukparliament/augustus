'use strict';

var UK_Parliament_Search = {};
window.UK_Parliament_Search = UK_Parliament_Search;

UK_Parliament_Search.addListeners = function () {
  var cardArray = document.querySelectorAll('.card__details');

  for (var i = 0; i < cardArray.length; i++) {
    var resultObject = UK_Parliament_Search.createResultObject(cardArray, i);
    var linkNode = UK_Parliament_Search.getLinkNode(cardArray, i);

    UK_Parliament_Search.addResultListener(linkNode, resultObject);
  }
};

UK_Parliament_Search.addResultListener = function (node, object) {
  if (node) {
    (function () {
      var resultObjectInstance = object;

      node.addEventListener('click', function (e) {
        if (resultObjectInstance.resultHintCount > 0) {
          appInsights.trackEvent('resultLinkClicked', {
            url: this.href,
            hints: resultObjectInstance.resultHints
          }, {
            position: resultObjectInstance.resultPosition,
            hintCount: resultObjectInstance.resultHintCount
          });
        } else {
          appInsights.trackEvent('resultLinkClicked', {
            url: this.href
          }, {
            position: resultObjectInstance.resultPosition
          });
        }
      }, false);
    }());
  }
};

UK_Parliament_Search.createResultObject = function (cardArray, i) {
  var resultObject = {
    resultPosition: null,
    resultHints: [],
    resultHintCount: 0
  };

  var startIndex = UK_Parliament_Search.getParameterByName('start_index');
  startIndex ? resultObject.resultPosition = i + parseInt(startIndex) : resultObject.resultPosition = i + 1;

  var hintNodes = cardArray[i].querySelectorAll('ul>li>span');

  if (hintNodes !== []) {
    resultObject.resultHints = UK_Parliament_Search.resultHintArray(hintNodes);
    resultObject.resultHintCount = resultObject.resultHints.length;
  }

  return resultObject;
};

UK_Parliament_Search.getLinkNode = function (cardArray, i) {
  var linkNodes = cardArray[i].querySelectorAll('h2>a');

  if (linkNodes.length > 0) {
    return linkNodes[0];
  }
};

UK_Parliament_Search.resultHintArray = function (hintNodes) {
  var resultHints = [];

  for (var i = 0; i < hintNodes.length; i++) {
    if (hintNodes[i].className !== 'url') {
      resultHints.push(hintNodes[i].innerHTML);
    }
  }

  return resultHints;
};

UK_Parliament_Search.getParameterByName = function (name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

window.addEventListener('load', function () {
  UK_Parliament_Search.addListeners();
});
