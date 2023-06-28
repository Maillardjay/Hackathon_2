const AbstractManager = require("./AbstractManager");

class ScreenSizeManager extends AbstractManager {
  constructor() {
    super({ table: "screen_size" });
  }

  insert(size) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      size.title,
    ]);
  }

  update(size) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [size.title, size.id]
    );
  }
}

module.exports = ScreenSizeManager;
