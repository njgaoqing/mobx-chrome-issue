require(['mobx'], function (mobx) {
  var backgroundPage = chrome.extension.getBackgroundPage();
  var options = backgroundPage.options;

  mobx.autorun(function () {
    console.log('[options] debug: %s, large: %s', options.debug, options.large);
  });
});
