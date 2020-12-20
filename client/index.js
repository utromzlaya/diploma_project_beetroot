const contactForm = document.getElementById("contactForm");
const tools = document.getElementById("tools");
const promotion = document.getElementById("promotion");

$(".js-linkToContactForm").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contactForm").offset().top,
    },
    700
  );
});
$(".js-linkToTools").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#tools").offset().top,
    },
    700
  );
});
$(".js-linkToPromotion").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#promotion").offset().top,
    },
    700
  );
});
