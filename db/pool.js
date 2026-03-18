import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://pirate:onepiece@localhost:5432/grand_line_explorer",
});

export default pool;
