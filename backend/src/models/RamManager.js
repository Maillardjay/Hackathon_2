const AbstractManager = require("./AbstractManager");

class RamManager extends AbstractManager {
  constructor() {
    super({ table: "ram" });
  }

  insert(ram) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      ram.title,
    ]);
  }

  update(ram) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [ram.title, ram.id]
    );
  }
}

module.exports = RamManager;
