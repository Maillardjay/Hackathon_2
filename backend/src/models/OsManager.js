const AbstractManager = require("./AbstractManager");

class ModelManager extends AbstractManager {
  constructor() {
    super({ table: "os" });
  }

  insert(os) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      os.title,
    ]);
  }

  update(os) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [os.title, os.id]
    );
  }
}

module.exports = ModelManager;
