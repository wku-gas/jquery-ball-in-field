/* eslint-disable indent */
/* eslint-disable no-undef */

function stopBallIfOutOfBounds() {
  const $ball = $('#ball');
  const { left, top } = $ball.position();
  console.log(left, top);
  if (top < 20) {
    $ball.css('top', 0);
  }
  if (left < 80) {
    $ball.css('left', 0);
  }
  if (left > 1180) {
    $ball.css('left', 1110);
  }
  if (top > 600) {
    $ball.css('top', 580);
  }
}

function moveBall(x, y) {
  const $ball = $('#ball');
  $ball.css('left', `+=${x}`);
  $ball.css('top', `+=${y}`);
  stopBallIfOutOfBounds();
}

$(() => {
  $('body').keydown(function (e) {
    switch (e.keyCode) {
      case 37: moveBall(-10, 0); break;
      case 38: moveBall(0, -10); break;
      case 39: moveBall(10, 0); break;
      case 40: moveBall(0, 10); break;
    }
  });
});
