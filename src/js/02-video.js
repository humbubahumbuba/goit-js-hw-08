import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

localStorage.getItem('videoplayer-current-time')
  ? iframePlayer.setCurrentTime(
      localStorage.getItem('videoplayer-current-time')
    )
  : 0;

iframePlayer.on(
  'timeupdate',
  _throttle(function (e) {
    localStorage.setItem(
      'videoplayer-current-time',
      Math.floor(e.seconds).toString()
    );
    console.log(
      'videoplayer-current-time (seconds) >> ',
      localStorage.getItem('videoplayer-current-time')
    );
  }, 1000)
);
