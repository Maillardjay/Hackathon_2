const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phones" });
  }

  findAll() {
    return this.database.query(
      `SELECT
      p.id as phone_id,
      b.name as phone_brand,
      m.name as phone_model,
      m.image_src as phone_image_src,
      m.image_alt as phone_image_alt,
      p.IMEI as phone_IMEI,
      p.is_loader_included as phone_loader,
      p.is_cable_included as phone_cable,
      n.name as phone_network,
      os.name as phone_os,
      r.name as phone_ram,
      s.size as phone_size,
      st.name as phone_state,
      stg.capacity as phone_storage,
      p.price as phone_price
    FROM phones AS p
    INNER JOIN models AS m ON m.id = p.model_id
    INNER JOIN brands AS b ON b.id = m.brands_id
    INNER JOIN networks AS n ON n.id = p.network_id
    INNER JOIN os ON os.id = b.os_id
    INNER JOIN ram AS r ON r.id = p.RAM_id
    INNER JOIN screen_size AS s ON s.id = p.screen_size_id
    INNER JOIN states AS st ON st.id = p.state_id
    INNER JOIN storages AS stg ON stg.id = p.storage_id
    ORDER BY phone_id ASC`
    );
  }

  insert(phone) {
    return this.database.query(
      `insert into ${this.table} (IMEI, is_loader_included, is_cable_included, model_id, network_id, RAM_id, storage_id, screen_size_id, state_id, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        phone.IMEI,
        phone.is_loader_included,
        phone.is_cable_included,
        phone.model_id,
        phone.network_id,
        phone.RAM_id,
        phone.storage_id,
        phone.screen_size_id,
        phone.state_id,
        phone.price,
      ]
    );
  }

  update(phone) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [phone.title, phone.id]
    );
  }
}

module.exports = PhoneManager;
