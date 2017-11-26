var dhuk = dhuk || {};

dhuk.index = (function () {
  var priv = {};
  return {
    init: function () {
      window.onload = function () {
        setTimeout(function () {
          // scroll to top when page refreshed
          window.scrollTo(0, 0);

          // set year
          var now = new Date();
          var elm = document.getElementsByClassName('year');
          if (elm && elm[0]) {
            elm[0].textContent = now.getFullYear();
          }
        }, 2);
      };
      // add event listener for scroll and fix a navbar
      window.document.onscroll = function () {
        var nav = document.getElementsByTagName('nav');
        var div = document.getElementsByClassName('navbar');
        var intro = document.getElementsByClassName('intro');
        if (window.scrollY >= 425) {
          if (div && div[0]) {
            var elm = div[0];
            elm.setAttribute('class', 'navbar fixed');
          }
          if (nav && nav[0]) {
            elm = nav[0];
            elm.setAttribute('class', 'fixed');
          }
          if (intro && intro[0]) {
            elm = intro[0];
            elm.setAttribute('style', 'display: none');
          }
        } else {
          if (div && div[0]) {
            elm = div[0];
            elm.setAttribute('class', 'navbar nav-background');
          }
          if (nav && nav[0]) {
            elm = nav[0];
            elm.removeAttribute('class');
          }
          if (intro && intro[0]) {
            elm = intro[0];
            elm.removeAttribute('style');
          }
        }
      };
    }
  };
})();

dhuk.index.init();