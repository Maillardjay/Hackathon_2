const AbstractManager = require("./AbstractManager");

class NetworkManager extends AbstractManager {
  constructor() {
    super({ table: "networks" });
  }

  insert(network) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      network.title,
    ]);
  }

  update(network) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [network.title, network.id]
    );
  }
}

module.exports = NetworkManager;
