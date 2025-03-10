<!DOCTYPE html>
<html lang="en">

<head>
  <title><?php echo $title; ?></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="https://www.aonebox.com/assets/images/aonebox.png">
  <meta name="description" content="<?php echo $meta_description; ?>">
  <meta name="Keywords" content="<?php echo $meta_keywords; ?>">
  <link rel="canonical" href="<?php echo $canonical; ?>" />
  <meta name="robots" content="<?php echo $robots; ?>">

  <meta name="og:type" property="og:type" content="<?php echo $og_type; ?>">
  <meta name="og:url" property="og:url" content="<?php echo $og_url; ?>">
  <meta name="og:title" property="og:title" content="<?php echo $og_title; ?>">
  <meta name="og:description" property="og:description" content="<?php echo $og_description; ?>">
  <meta name="og:image" property="og:image" content="<?php echo $og_image; ?>">

  <meta name="twitter:card" content="<?php echo $twitter_card; ?>">




  <link href="https://fonts.googleapis.com/css2?family=Montez&display=swap" rel="stylesheet">

  <link href="https://fonts.googleapis.com/css2?family=Sofia&display=swap" rel="stylesheet">

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">
  <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="themify-icons/themify-icons.css">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/owl.theme.default.min.css">
  <link href="css/animate.css" rel="stylesheet">
  <link href="css/set1.css" rel="stylesheet">
  <link href="css/custom.css" rel="stylesheet">
  <link href="css/responsive.css" rel="stylesheet">
  <link href="css/swiper-bundle.min.css" rel="stylesheet">
  <script src="js/swiper-bundle.min.js"></script>



  <script src="js/gsap.min.js"></script>
  <script src="js/ScrollTrigger.min.js"></script>
  <script>
    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener("load", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".wrapper",
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
            markers: false,
          },
        })
        .to(".image", {
          scale: 2,
          z: 350,
          transformOrigin: "center center",
          ease: "power1.inOut",
        })
        .to(
          ".section.hero",
          {
            scale: 1,
            transformOrigin: "center center",
            ease: "power1.inOut",
          },
          "<"
        );
    });

  </script>


  <!-- Global site tag (gtag.js) - Google Analytics -->
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-00S1ZEXQYD"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-00S1ZEXQYD');
  </script>
  <!--CLARITY-->
  <script type="text/javascript">
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "hk7uu8c0tu");
  </script>
  <style>
    .box_white {
      color: #fff;
    }
  </style>
  <!-- Meta Pixel Code -->
  <script>
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1147012879992108');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1147012879992108&ev=PageView&noscript=1" /></noscript>
  <!-- End Meta Pixel Code -->
</head>

<body>

  <!--top header-->
  <section class="header_sec" id="sticky-wrap">
    <div class="container1">
      <div class="nav_inner">
        <div class="logo_area">
          <div class="header_logo"> <a href="https://www.aonebox.com/"><img
                src="https://www.aonebox.com/assets/images/aonebox.png" alt="aonebox" title="aonebox" /></a> </div>
        </div>
        <!-- <div class="partner_logo_area">
        <div class="header_logo"> <a href=""><img src="images/partner_logo.png" alt="" /></a> </div>
      </div> -->
        <div class="nav_area">
          <div class="menu_area_right">
            <div class="menu_area"> <span style="" onclick="openNav()">&#9776;</span> </div>
          </div>
          <div id="mySidenav" class="sidenav"> <a href="javascript:void(0)" class="closebtn"
              onclick="closeNav()">&times;</a>
            <div class="side_nav_area">
              <ul class="list_nav">
                <li>
                  <a href="https://www.aonebox.com/">Home</a>
                </li>
                <li>
                  <a href="https://www.aonebox.com/about-us">About</a>
                </li>
                <li>
                  <a href="https://www.aonebox.com/our-services">Services</a>
                </li>
                <li>
                  <a href="https://www.aonebox.com/work-portfolio">Work</a>
                </li>
                <li>
                  <a href="https://www.aonebox.com/case-studies">Case-Study</a>
                </li>
                <li>
                  <a href="https://www.aonebox.com/blogs">Blog</a>
                </li>
                <li>
                  <a href="https://www.aonebox.com/contact-us">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>