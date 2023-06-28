-- Active: 1684940650999@@127.0.0.1@3306@hackathon_2
DROP TABLE IF EXISTS phones;

DROP TABLE IF EXISTS models;

DROP TABLE IF EXISTS brands;

DROP TABLE IF EXISTS networks;

DROP TABLE IF EXISTS os;

DROP TABLE IF EXISTS ram;

DROP TABLE IF EXISTS storages;

DROP TABLE IF EXISTS screen_size;

DROP TABLE IF EXISTS states;


CREATE TABLE brands (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE models (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  brands_id INT NOT NULL,
  CONSTRAINT brand_id_fk FOREIGN KEY (brands_id) REFERENCES brands(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE networks (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE os (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE RAM (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name int(11) not null
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE storages (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  capacity int(11) not null 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE screen_size (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  size int(11) not null
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE states (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100) not null
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE table phones (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  image_src VARCHAR(255) NOT NULL,
  image_alt VARCHAR(255) NOT NULL,
  IMEI BIGINT NOT NULL,
  is_loader_included TINYINT NOT NULL,
  is_cable_included TINYINT NOT NULL,
  model_id INT NOT NULL,
  network_id INT NOT NULL,
  os_id INT NOT NULL,
  RAM_id INT NOT NULL,
  storage_id INT NOT NULL,
  screen_size_id INT NOT NULL,
  state_id INT NOT NULL,
  CONSTRAINT model_id_fk FOREIGN KEY (model_id) REFERENCES models(id),
  CONSTRAINT network_id_fk FOREIGN KEY (network_id) REFERENCES networks(id),
  CONSTRAINT os_id_fk FOREIGN KEY (os_id) REFERENCES os(id),
  CONSTRAINT ram_id_fk FOREIGN KEY (ram_id) REFERENCES RAM(id),
  CONSTRAINT storage_id_fk FOREIGN KEY (storage_id) REFERENCES storages(id),
  CONSTRAINT screen_size_id_fk FOREIGN KEY (screen_size_id) REFERENCES screen_size(id),
  CONSTRAINT state_id_fk FOREIGN KEY (state_id) REFERENCES states(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO brands (name)
VALUES ('Apple') ,('Samsung'),('Google'),('Xiaomi'),('Fairphone'),('Sony'),('Huawei');


INSERT INTO models (name, brands_id)
VALUES ('iPhone 14 Pro',1);

INSERT INTO models (name, brands_id)
VALUES ('iPhone 14',1);

INSERT INTO models (name, brands_id)
VALUES ('iPhone 13',1);

INSERT INTO models (name, brands_id)
VALUES ('iPhone SE',1);

INSERT INTO models (name, brands_id)
VALUES ('iPhone 12',1);

INSERT INTO models (name, brands_id)
VALUES ('Galaxy S23',2);

INSERT INTO models (name, brands_id)
VALUES ('Galaxy S23+',2);

INSERT INTO models (name, brands_id)
VALUES ('Galaxy S23 Ultra',2);

INSERT INTO models (name, brands_id)
VALUES ('Galaxy Z Fold4',2);

INSERT INTO models (name, brands_id)
VALUES ('Galaxy Z Flip4',2);

INSERT INTO models (name, brands_id)
VALUES ('Pixel 7a',3);

INSERT INTO models (name, brands_id)
VALUES ('Pixel 7 Pro',3);

INSERT INTO models (name, brands_id)
VALUES ('Pixel 7',3);

INSERT INTO models (name, brands_id)
VALUES ('Pixel 6a',3);

INSERT INTO models (name, brands_id)
VALUES ('Xiaomi 13 Pro',4);

INSERT INTO models (name, brands_id)
VALUES ('Xiaomi 13',4);

INSERT INTO models (name, brands_id)
VALUES ('Redmi Note 12',4);

INSERT INTO models (name, brands_id)
VALUES ('Redmi 12C',4);

INSERT INTO models (name, brands_id)
VALUES ('Fairphone 3+',5);

INSERT INTO models (name, brands_id)
VALUES ('Fairphone 4',5);

INSERT INTO models (name, brands_id)
VALUES ('Xperia 10 V',6);

INSERT INTO models (name, brands_id)
VALUES ('Xperia 5 IV',6);

INSERT INTO models (name, brands_id)
VALUES ('Xperia 1 IV',6);

INSERT INTO models (name, brands_id)
VALUES ('HUAWEI Mate 50 Pro',7);

INSERT INTO models (name, brands_id)
VALUES ('HUAWEI Mate Xs 2',7);

INSERT INTO models (name, brands_id)
VALUES ('HUAWEI P60 Pro',7);

INSERT INTO networks (name)
VALUES ('3G'), ('4G'), ('5G');

INSERT INTO os (name)
VALUES ('Android'), ('iOS'), ('Tizen'), ('Linux'), ('Bada'), ('BlackBerry OS');

INSERT INTO RAM (name)
VALUES (1), (2), (3), (4), (6), (8), (16), (32);

INSERT INTO storages (capacity)
VALUES (16), (32), (64), (128), (256), (512), (1000);

INSERT INTO screen_size (size)
VALUES (3), (4), (5), (6), (7);

INSERT INTO states (name)
VALUES ('DEEE'), ('Réparable'), ('Bloqué'), ('Reconditionnable'), ('Reconditionné');

INSERT INTO phones (IMEI, image_src, image_alt, is_loader_included, is_cable_included, model_id, network_id, os_id, RAM_id, storage_id, screen_size_id, state_id)
VALUES (353897409441576, 'https://picsum.photos/200', 'randompic', false, false, 1, 2, 2, 5, 3, 5, 4);

INSERT INTO phones (IMEI, image_src, image_alt, is_loader_included, is_cable_included, model_id, network_id, os_id, RAM_id, storage_id, screen_size_id, state_id)
VALUES (783897125641576, 'https://picsum.photos/200', 'randompic', false, true, 5, 2, 2, 5, 4, 1, 5);

INSERT INTO phones (IMEI, image_src, image_alt, is_loader_included, is_cable_included, model_id, network_id, os_id, RAM_id, storage_id, screen_size_id, state_id)
VALUES (789456123015928, 'https://picsum.photos/200', 'randompic', true, true, 11, 2, 4, 3, 5, 5, 5);

INSERT INTO phones (IMEI, image_src, image_alt, is_loader_included, is_cable_included, model_id, network_id, os_id, RAM_id, storage_id, screen_size_id, state_id)
VALUES (963258741023598, 'https://picsum.photos/200', 'randompic', true, true, 21, 3, 3, 3, 3, 3, 3);

INSERT INTO phones (IMEI, image_src, image_alt, is_loader_included, is_cable_included, model_id, network_id, os_id, RAM_id, storage_id, screen_size_id, state_id)
VALUES (598733012547158, 'https://picsum.photos/200', 'randompic', true, false, 15, 1, 1, 1, 1, 1, 1);

INSERT INTO phones (IMEI, image_src, image_alt, is_loader_included, is_cable_included, model_id, network_id, os_id, RAM_id, storage_id, screen_size_id, state_id)
VALUES (563981246852315, 'https://picsum.photos/200', 'randompic', true, true, 23, 2, 1,7, 4, 3,3 );