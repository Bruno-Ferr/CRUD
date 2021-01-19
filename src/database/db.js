const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;
    db.run(`
        CREATE TABLE IF NOT EXISTS people (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            age TEXT,
            location TEXT
        );
    `)
/*
    db.run(`
        INSERT INTO people (
            name,
            age,
            location
        ) VALUES (
            "Bruno",
            "19",
            "SP"
        );
    `);

    db.all(` SELECT * FROM people`, function(err, rows) {
        if (err) {
            return console.log(err);
        }

        console.log(rows);
    })

    db.run(`DELETE FROM people WHERE id = ?`);
}) */


