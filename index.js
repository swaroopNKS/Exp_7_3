$("#gc").click(function() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  var color = "#" + randomColor;
  $(".trapezoid").css("border-bottom-color", color);
});
$("#bc").click(function() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  var color = "#" + randomColor;
  $(".rectangle").css("background-color", color);
  });
  $("#ti").click(function() {
  $(".circle").css("width", "+=10");
  $(".circle").css("height", "+=10");
  });
  $("#td").click(function() {
  $(".circle").css("width", "-=10");
  $(".circle").css("height", "-=10");
  });
  $("#rl1").click(function() {
  location.reload(true);
});