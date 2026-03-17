const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://pirate:onepiece@localhost:5432/grand_line_explorer",
});

module.exports = pool;
