jQuery(document).ready(function() {

  jQuery(".c-slider-init").slick({
    
    dots: false,
    nav: false,
    arrows: false,
    infinite: true,
    speed: 1200,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false, 
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });


  let transitionSetup = {
    target: ".slick-list",
    enterClass: "u-scale-out",
    doTransition: function() {
      var slideContainer = document.querySelector(this.target);
      slideContainer.classList.add(this.enterClass);
      jQuery(".slick-current").removeClass("animateIn");
    },
    exitTransition: function() {
      var slideContainer = document.querySelector(this.target);
      setTimeout(() => {
        slideContainer.classList.remove(this.enterClass);
        jQuery(".slick-current").addClass("animateIn");
      }, 2000);
    }
  };


  jQuery(".next-btn").on("click", function() {
    jQuery(".c-slider-init").slick("slickNext");
    
    transitionSetup.doTransition();
    transitionSetup.exitTransition();
    jQuery(".slick-current").removeClass("initialAnimation");
  });


  jQuery(".prev-btn").on("click", function() {
    jQuery(".c-slider-init").slick("slickPrev");

    transitionSetup.doTransition();
    transitionSetup.exitTransition();
    jQuery(".slick-current").removeClass("initialAnimation");
  });
});


