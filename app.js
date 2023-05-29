$(".change").on("click", function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $(".box1").removeClass("blue");
    $(".box2").removeClass("red");
    $(".box4").removeClass("red2");

    $(".name1").removeClass("red1");

    $(".change").text("OFF");
  } else {
    $("body").addClass("dark");
    $(".box1").addClass("blue");
    $(".box2").addClass("red");
    $(".box4").addClass("red2");
    $(".name1").addClass("red1");

    $(".change").text("ON");
  }
});
