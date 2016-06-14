require(['mobx'], function (mobx) {
  var options = window.options = mobx.observable({
    debug: true,
    large: false
  });

  mobx.autorun(function () {
    console.log('[background] debug: %s, large: %s', options.debug, options.large);
  });

  setInterval(function () {
    options.debug = !options.debug;
  }, 1000);
});
