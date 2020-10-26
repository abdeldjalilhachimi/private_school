$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    if ($(this).attr("aria-expanded").toLowerCase() == "false") {
      $(".main-content .col").hide();
    } else {
      $(".main-content .col").show();
    }
  });

  // Scroll to first element
  $("#lead-down").click(function () {
    var scrollDistance = $("#lead").next().offset().top;
    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px",
      },
      500
    );
  });
  // Scroll to top
  $("#to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // Counter up

  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});
