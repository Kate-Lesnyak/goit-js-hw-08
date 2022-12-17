// Ознакомься с документацией библиотеки Vimeo плеера.
// Добавь библиотеку как зависимость проекта через npm.
// Инициализируй плеер в файле скрипта как это описано в секции pre - existing player, но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
// Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// Сохраняй время воспроизведения в локальное хранилище.Пусть ключом для хранилища будет строка "videoplayer-current-time".
// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
// Добавь в проект библиотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const PLAYBACK_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(e) {
  localStorage.setItem(PLAYBACK_TIME, JSON.stringify(e.seconds));
}

try {
  player.setCurrentTime(JSON.parse(localStorage.getItem(PLAYBACK_TIME)));
}
catch (error) {
  player.setCurrentTime(0);
}

// player.setCurrentTime(JSON.parse(localStorage.getItem(PLAYBACK_TIME) || 0));
