const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "new_password",
    host: "localhost",
    port: 5432,
    database: "classcards"
})

module.exports = pool;