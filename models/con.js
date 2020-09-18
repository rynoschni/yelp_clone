const host = "lallah.db.elephantsql.com";
const database = "ipwnzdjf";
const user = "ipwnzdjf";
const password = "zfsmc-lFqiZx4x43MZHmYZqlBNHwVMTS";

const pgp = require('pg-promise')({
    query: function (event) {
        console.log("QUERY:", event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}

const db = pgp(options);

module.exports = db;
