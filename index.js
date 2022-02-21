//import { initBackend } from './node_modules/absurd-sql/dist/indexeddb-main-thread.js';
import { initBackend } from 'absurd-sql/dist/indexeddb-main-thread';

// prepare absurd-sql
console.log("hello world!");
function init() {
  let worker = new Worker(new URL('./index.worker.js', import.meta.url));
  // This is only required because Safari doesn't support nested
  // workers. This installs a handler that will proxy creating web
  // workers through the main thread
  initBackend(worker);
}

init();
