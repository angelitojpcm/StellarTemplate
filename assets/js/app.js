(function (window, document, $, undefined) {
  "use strict";

  var app = {
    i: function (e) {
      app.d();
      app.methods();
    },

    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html")),
        (this.sideNav = $(".rbt-search-dropdown"));
    },
    methods: function (e) {
      this.topBar();
      this.hero();
    },
    topBar: function (e) {
      let topbar = $("header .topbar");
      let navbar = $("header .navbar");

      //Scroll
      this._window.scroll(function () {
        if (app._window.scrollTop() > 100) {
          topbar.addClass("hide");
          navbar.addClass("move-up");
        } else {
          topbar.removeClass("hide");
          navbar.removeClass("move-up");
        }
      });
    },
    hero: function (e) {
      let hero = $("#hero");

      // Detectar el hover
      hero.hover(
        function () {
          // Esta función se ejecuta cuando el mouse entra
          $(this).addClass("hover");
        },
        function () {
          // Esta función se ejecuta cuando el mouse sale
          $(this).removeClass("hover");
        }
      );
    },
  };

  app.i();
})(window, document, jQuery);
