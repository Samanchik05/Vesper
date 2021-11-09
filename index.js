$(".btn-all").click(function () {
  $(".course").filter(".all").removeClass("hidden");
});

$(".btn-app").click(function () {
  $(".course").addClass("hidden");
  $(".course").filter(".app").removeClass("hidden");
});

$(".btn-web").click(function () {
  $(".course").addClass("hidden");
  $(".course").filter(".web").removeClass("hidden");
});

$(".btn-card").click(function () {
  $(".course").addClass("hidden");
  $(".course").filter(".card").removeClass("hidden");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 20,
    loop: true,
    // autoWidth:true,
    items: 4,
    startPosition: 3,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 7900,
    autoplaySpeed: 22000,
  });
});

AOS.init();
