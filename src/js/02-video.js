import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 1024,
});
let currentTime=0;
player.on('play', function () {
  console.log('played the video!');
  // console.log(player.getCurrentTime().then);
});

const updateTime = () => {
  player.getCurrentTime().then(function (seconds) {
    // `seconds` indicates the current playback position of the video
    currentTime = seconds;
  })
}
// player.setCurrentTime();

player.on('timeupdate', function () {
  console.log('playing the video!');
  _.throttle(updateTime(),2000);
    // localStorage.setItem('currentTime', seconds);
    // console.log(localStorage.getItem('currentTime'));
    console.log(currentTime);
  });