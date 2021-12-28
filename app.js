function moveBall(x, y) {
  const $ball = $("#ball")
  $ball.css("left", `+=${x}`)
  $ball.css("top", `+=${y}`)
}

$(() => {
  const $ball = $("#ball")

  $("body").keydown(function (e) {
    switch (e.keyCode) {
      case 37: moveBall(-10, 0); break;
      case 38: moveBall(0, -10); break;
      case 39: moveBall(10, 0); break;
      case 40: moveBall(0, 10); break;
    }
  })
});
