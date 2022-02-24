import { initBackend } from 'absurd-sql/dist/indexeddb-main-thread';
// prepare absurd-sql
console.log("hello world!");
function init() {
  let worker = new Worker(new URL('./index.worker.js', import.meta.url));
  // This is only required because Safari doesn't support nested
  // workers. This installs a handler that will proxy creating web
  // workers through the main thread
  initBackend(worker);

	return worker;
}

//init();


// Main code - has access to DOM.  Use dbworker.postMessage(); to send messages to the database, and dbworker.onmessage = function(e) {} to receive messages.
// more info see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
//

let dbworker = init();


dbworker.onmessage = function(e) {
	console.log("recieving reply: " + JSON.stringify(e.data, undefined, 2));
}

console.log("posting a message...");
dbworker.postMessage("hello there, I'm a message.");
