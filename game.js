AFRAME.registerComponent('game-play', {

  init: function () {
    GiftsRemaining = 5
    this.el.addEventListener('collide', function (e) {
      e.detail.target.el.remove();
      GiftsRemaining -= 1;
      GiftRemainingText = document.getElementById('GiftsremainingText');
      console.log(GiftRemainingText);
      GiftRemainingText.setAttribute('text', { value: String(GiftsRemaining) });
      if (GiftsRemaining == 0) {
        gameOverText = document.getElementById('gameOverText');
        gameOverText.setAttribute('text', { value: 'You WON!' });

      }
    });
  },

});