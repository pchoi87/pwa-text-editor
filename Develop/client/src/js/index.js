import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const editor = new Editor();

if (typeof editor === 'undefined') {
  const loadDiv = document.createElement('div');
  loadDiv.id = 'loading';
  loadDiv.textContent = 'Loading...';
  main.appendChild(loadDiv);
}

// Register service worker
if ('serviceWorker' in navigator) {
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register()
    .then((reg) => console.log('Service worker registered.', reg))
    .catch((err) => console.log('Service worker registration failed.', err));
}
