const host = "raja.db.elephantsql.com";
const database = "drqdcyrk";
const user = "drqdcyrk";
const password = "aebLtEZCQpVewFww3kuOLGgUTWSA0Nk9";

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
