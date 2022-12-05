import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem(LOCAL_KEY, data.seconds);
}

const lastCurrentTime = localStorage.getItem(LOCAL_KEY);
if (lastCurrentTime) {
  player.setCurrentTime(localStorage.getItem(LOCAL_KEY));
}
