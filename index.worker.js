import initSqlJs from '@jlongster/sql.js';
import { SQLiteFS } from 'absurd-sql';
import IndexedDBBackend from 'absurd-sql/dist/indexeddb-backend';

async function init() {
	console.log("initializing database...");
  let SQL = await initSqlJs({ locateFile: file => file });
  let sqlFS = new SQLiteFS(SQL.FS, new IndexedDBBackend());
  SQL.register_for_idb(sqlFS);

  SQL.FS.mkdir('/sql');
  SQL.FS.mount(sqlFS, {}, '/sql');

  const path = '/sql/db.sqlite';
  if (typeof SharedArrayBuffer === 'undefined') {
    let stream = SQL.FS.open(path, 'a+');
    await stream.node.contents.readIfFallback();
    SQL.FS.close(stream);
  }

  let db = new SQL.Database(path, { filename: true });
  // You might want to try `PRAGMA page_size=8192;` too!
  db.exec(`
    PRAGMA journal_mode=MEMORY;
  `);

   // Your code

	console.log("within the function");

	return db;
}

function run() {
	console.log("started worker.");

	let db = init();
	console.log("called init.");

}

onmessage = function(e) {
	console.log("got a message: " + e.data);
	postMessage("this is a reply.");
}

run();
