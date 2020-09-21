'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var GAP_BETWEEN_THE_COLUMNS = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, 120, 40);
  ctx.fillText(`Список результатов:`, 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(
        players[i],
        CLOUD_X + GAP + GAP_BETWEEN_THE_COLUMNS + (GAP_BETWEEN_THE_COLUMNS + BAR_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP
    );

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GAP + GAP_BETWEEN_THE_COLUMNS + (GAP_BETWEEN_THE_COLUMNS + BAR_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - (BAR_HEIGHT * times[i] / maxTime) - FONT_GAP * 2
    );

    if (players[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)';
    }

    ctx.fillRect(
        CLOUD_X + GAP + GAP_BETWEEN_THE_COLUMNS + (GAP_BETWEEN_THE_COLUMNS + BAR_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP,
        BAR_WIDTH,
        -(BAR_HEIGHT * times[i]) / maxTime
    );
    ctx.fillStyle = `#000`;
  }
};
