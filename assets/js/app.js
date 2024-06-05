(function (window, document, $, undefined) {
  "use strict";

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

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
      this.dont();
      this.topBar();
      this.scrollUp();
      this.pricing();
    },
    dont: function (e) {
      $("body").on("contextmenu", function (e) {
        Toast.fire({
          icon: "error",
          title: "Oops...",
          text: "Right click is disabled",
          animation: true,
          customClass: {
            popup: "animated tada",
          },
        });
        return false;
      });
      $("body").on("selectstart", function (e) {
        Toast.fire({
          icon: "error",
          title: "Oops...",
          text: "Text selection is disabled",
          animation: true,
          customClass: {
            popup: "animated tada",
          },
        });
        return false;
      });
      $("body").on("click", function (e) {
        if (e.target.tagName == "IMG") {
          Toast.fire({
            icon: "error",
            title: "Oops...",
            text: "Image is disabled",
            animation: true,
            customClass: {
              popup: "animated tada",
            },
          });
          return false;
        }
        return false;
      });
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
    scrollUp: function (e) {
      this._window.scroll(function () {
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            $(".scroll-container").removeClass("hide").addClass("show");
          } else {
            $(".scroll-container").removeClass("show").addClass("hide");
          }
        });
      });

      $(".scroll-container").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
      });
    },
    animation_bar: function (e) {},
    pricing: function (e) {},
  };

  app.i();
})(window, document, jQuery);
