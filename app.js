/* eslint-disable indent */
/* eslint-disable no-undef */

function stopBallIfOutOfBounds() {
  const $ball = $('#ball');
  const $field = $('#field');
  const fieldHeight = $field.height();
  const fieldWidth = $field.width();
  const { left: fieldLeft } = $field.position();
  const { left, top } = $ball.position();
  if (top < 40) {
    $ball.css('top', 0);
  }
  if (left < 80 + fieldLeft) {
    $ball.css('left', 0);
  }
  if (left > fieldWidth + 80) {
    $ball.css('left', fieldWidth - 20);
  }
  if (top > fieldHeight + 20) {
    $ball.css('top', fieldHeight - 20);
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
