import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const saveCurrentTime = throttle(seconds => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

player.on('timeupdate', data => {
  saveCurrentTime(data.seconds);
});

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.getDuration()
    .then(duration => {
      const startTime = parseFloat(currentTime);
      const validTime = startTime > 0 && startTime <= duration ? startTime : 0;
      return player.setCurrentTime(validTime);
    })
    .catch(error => {
      console.error('Error getting video duration:', error);
    });
}