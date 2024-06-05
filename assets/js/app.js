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
      this.topBar();
      this.scrollUp();
      this.testimonials();
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
    testimonials: function () {
      var testimonials = $(".testimonial");
      var container = $(".testimonials-container");
      var currentIndex = 0;
      var visibleTestimonials = 1;

      function showTestimonials() {
        testimonials.hide();
        for (
          var i = currentIndex;
          i < currentIndex + visibleTestimonials;
          i++
        ) {
          testimonials.eq(i).fadeIn(300);
        }
      }

      function updateButtons() {
        $(".prev-btn").prop("disabled", currentIndex === 0);
        $(".next-btn").prop(
          "disabled",
          currentIndex + visibleTestimonials >= testimonials.length
        );
      }

      $(window)
        .on("resize", function () {
          var width = $(window).width();

          if (width < 600) {
            visibleTestimonials = 1;
          } else if (width < 1000) {
            visibleTestimonials = 2;
          } else {
            visibleTestimonials = 4;
          }
          currentIndex = 0; 
          showTestimonials();
          updateButtons();
        })
        .trigger("resize"); 

      $(".prev-btn").on("click", function () {
        if (currentIndex > 0) {
          currentIndex -= visibleTestimonials;
          if (currentIndex < 0) currentIndex = 0; 
          showTestimonials();
          updateButtons();
        }
      });

      $(".next-btn").on("click", function () {
        if (currentIndex + visibleTestimonials < testimonials.length) {
          currentIndex += visibleTestimonials;
          showTestimonials();
          updateButtons();
        }
      });
    },
  };

  app.i();
})(window, document, jQuery);
