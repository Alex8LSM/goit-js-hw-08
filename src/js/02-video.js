import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 1024,
});
if (localStorage.getItem('videoplayer-current-time') > 0)
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

const updateTime = () => {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  })
}
  player.on('timeupdate', throttle(updateTime, 1000));