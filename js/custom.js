//testimonial_slider
var cc = $("#a_award_slider");
cc.owlCarousel({
  autoplay: false,
  loop: true,
  nav: false,
  dots: false,
  margin: 20,
  animationSpeed: 200,

  //animateOut: 'fadeOut',
  items: 1,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],

  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
      nav: false,
    },
    // breakpoint from 480 up
    480: {
      items: 1,
      nav: false,
    },
    // breakpoint from 768 up
    768: {
      items: 1,
      nav: true,
    },

    992: {
      items: 1,
      nav: true,
    },
  },
});

//script to create sticky header
jQuery(function () {
  createSticky(jQuery("#sticky-wrap"));
});

function createSticky(sticky) {
  if (typeof sticky != "undefined") {
    var pos = sticky.offset().top,
      win = jQuery(window);

    win.on("scroll", function () {
      if (win.scrollTop() > pos) {
        sticky.addClass("stickyhead");
      } else {
        sticky.removeClass("stickyhead");
      }
    });
  }
}

/*== bottom to top ==*/
jQuery(document).ready(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery("#scrollup").fadeIn();
    } else {
      jQuery("#scrollup").fadeOut();
    }
  });
  jQuery("#scrollup").click(function () {
    jQuery("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });
});

/**/
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more_content");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//testimonial_slider
var cc = $("#client_logo_slider");
cc.owlCarousel({
  autoplay: true,
  loop: true,
  nav: false,
  dots: false,
  margin: 20,
  animationSpeed: 200,

  //animateOut: 'fadeOut',
  items: 1,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],

  responsive: {
    // breakpoint from 0 up
    0: {
      items: 2,
      nav: false,
    },
    // breakpoint from 480 up
    480: {
      items: 3,
      nav: false,
    },
    // breakpoint from 768 up
    768: {
      items: 4,
      nav: false,
    },

    992: {
      items: 6,
      nav: false,
    },
  },
});

//testimonial_slider
var cc = $("#testimonial_slider");
cc.owlCarousel({
  autoplay: true,
  loop: true,
  nav: false,
  dots: true,
  margin: 40,
  animationSpeed: 200,

  //animateOut: 'fadeOut',
  items: 1,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],

  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
      nav: false,
    },
    // breakpoint from 480 up
    480: {
      items: 1,
      nav: false,
    },
    // breakpoint from 768 up
    768: {
      items: 1,
      nav: false,
    },

    992: {
      items: 2,
      nav: false,
    },
  },
});

// for side menu
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*== page load ==*/
jQuery(window).on("load", function () {
  setTimeout(function () {
    jQuery("#pageload_modal").modal("show");
  }, 35000);
});

jQuery(window).on("load", function () {
  setTimeout(function () {
    jQuery("#pageload_modal2").modal("show");
  }, 90000);
});

// banner

var bg = document.getElementById("bg-img");
var bt1 = document.getElementById("banner-txt-1");
var bt2 = document.getElementById("banner-txt-2");
var bt3 = document.getElementById("banner-txt-3");

function displayImage1(x) {
  bg.style.backgroundImage = "url('images/banner1.jpg')";
  bt1.style.color = "#0000ff42";
  bt1.style.textShadow = "2px 1px #ffffff38";
  bt2.style.visibility = "hidden";
  bt3.style.visibility = "hidden";
}
function displayImage2(x) {
  bg.style.backgroundImage = "url('images/banner2.jpg')";
  bt2.style.color = "#0000ff42";
  bt2.style.textShadow = "2px 1px #ffffff38";
  bt1.style.visibility = "hidden";
  bt3.style.visibility = "hidden";
}
function displayImage3(x) {
  bg.style.backgroundImage = "url('images/banner3.jpg')";
  bt3.style.color = "#0000ff42";
  bt3.style.textShadow = "2px 1px #ffffff38";
  bt1.style.visibility = "hidden";
  bt2.style.visibility = "hidden";
}
function defImage(x) {
  bg.style.backgroundImage = "url('images/main-banner.jpg')";
  bt1.style.color = "white";
  bt1.style.textShadow = "";
  bt2.style.color = "white";
  bt2.style.textShadow = "";
  bt3.style.color = "white";
  bt3.style.textShadow = "";
  bt1.style.visibility = "visible";
  bt2.style.visibility = "visible";
  bt3.style.visibility = "visible";
}

// Swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
  simulateTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const calculateHeight = () => {
  const swiperSlideElements = Array.from(
    document.querySelectorAll(".swiper .swiper-slide")
  );
  if (!swiperSlideElements.length) return;
  const width = swiperSlideElements[0].getBoundingClientRect().width;
  const height = Math.round(width / (16 / 9));
  swiperSlideElements.map((element) => (element.style.height = `${height}px`));
};

document.addEventListener("DOMContentLoaded", calculateHeight);
addEventListener("resize", calculateHeight);

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

const text = document.querySelector(".text");
const txt = document.querySelector(".txt");

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
  )
  .join("");

txt.innerHTML = txt.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
  )
  .join("");





















  
