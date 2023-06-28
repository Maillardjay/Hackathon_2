const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phones" });
  }

  findAll() {
    return this.database.query(
      `select
      p.id as phone_id,
      brands.name as phone_brand,
      models.name as phone_model,
      p.image_src as phone_image_src,
      p.image_alt as phone_image_alt,
      p.IMEI as phone_IMEI,
      p.is_loader_included as phone_loader,
      p.is_cable_included as phone_cable,
      networks.name as phone_network,
      os.name as phone_os,
      ram.name as phone_ram,
      screen_size.size as phone_size,
      states.name as phone_state,
      storages.capacity as phone_storage

      from phones as p

      inner join models ON models.id = p.model_id
      inner join brands ON brands.id = models.brands_id
      inner join networks ON networks.id = p.network_id
      inner join os ON os.id = p.os_id
      inner join ram ON ram.id = p.ram_id
      inner join screen_size ON screen_size.id = p.screen_size_id
      inner join states ON states.id = p.state_id
      inner join storages ON storages.id = p.storage_id
      `
    );
  }

  insert(phone) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      phone.title,
    ]);
  }

  update(phone) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [phone.title, phone.id]
    );
  }
}

module.exports = PhoneManager;
