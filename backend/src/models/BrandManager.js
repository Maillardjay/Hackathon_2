const AbstractManager = require("./AbstractManager");

class BrandManager extends AbstractManager {
  constructor() {
    super({ table: "brands" });
  }

  insert(brand) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      brand.title,
    ]);
  }

  update(brand) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [brand.title, brand.id]
    );
  }
}

module.exports = BrandManager;
