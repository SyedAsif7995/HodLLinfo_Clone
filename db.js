const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./crypto.db', (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run('CREATE TABLE IF NOT EXISTS cryptos (name TEXT, last REAL, buy REAL, sell REAL, volume REAL, base_unit TEXT)');
    }
});

module.exports = db;
