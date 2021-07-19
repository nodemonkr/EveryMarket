const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "1323",
  database: "mydata",
});

async function getUserList() {
  let conn, rows;
  try {
    conn = await pool.getConnection();
    conn.query("USE mydata"); // 사용할 DB 명시
    rows = await conn.query("SELECT * FROM mydata.customer"); // 쿼리 실행
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
    return rows;
  }
}

module.exports = { getUserList };
