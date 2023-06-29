-- SQLBook: Code
-- Active: 1684940650999@@127.0.0.1@3306@hackathon_2
DROP TABLE IF EXISTS phones;

DROP TABLE IF EXISTS models;

DROP TABLE IF EXISTS brands;

DROP TABLE IF EXISTS networks;


DROP TABLE IF EXISTS ram;

DROP TABLE IF EXISTS storages;

DROP TABLE IF EXISTS screen_size;

DROP TABLE IF EXISTS states;

DROP TABLE IF EXISTS os;

CREATE TABLE os (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE brands (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  os_id INT NOT NULL,
  CONSTRAINT os_id_fk FOREIGN KEY (os_id) REFERENCES os(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE models (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  image_src VARCHAR(255) NOT NULL,
  image_alt VARCHAR(255) NOT NULL,
  brands_id INT NOT NULL,
  CONSTRAINT brand_id_fk FOREIGN KEY (brands_id) REFERENCES brands(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE networks (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL
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
  IMEI BIGINT NOT NULL,
  is_loader_included TINYINT NOT NULL,
  is_cable_included TINYINT NOT NULL,
  model_id INT NOT NULL,
  network_id INT NOT NULL,
  RAM_id INT NOT NULL,
  storage_id INT NOT NULL,
  screen_size_id INT NOT NULL,
  state_id INT NOT NULL,
  price INT,
  CONSTRAINT model_id_fk FOREIGN KEY (model_id) REFERENCES models(id),
  CONSTRAINT network_id_fk FOREIGN KEY (network_id) REFERENCES networks(id),
  CONSTRAINT ram_id_fk FOREIGN KEY (ram_id) REFERENCES RAM(id),
  CONSTRAINT storage_id_fk FOREIGN KEY (storage_id) REFERENCES storages(id),
  CONSTRAINT screen_size_id_fk FOREIGN KEY (screen_size_id) REFERENCES screen_size(id),
  CONSTRAINT state_id_fk FOREIGN KEY (state_id) REFERENCES states(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO os (name)
VALUES ('Android'), ('iOS'), ('Linux'), ('EMUI');

INSERT INTO brands (name, os_id)
VALUES ('Apple', 2) ,('Samsung',1),('Google',1),('Xiaomi',1),('Fairphone',1),('Sony',1),('Huawei',4);


INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('iPhone 14 Pro','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d1eh9yux7w8iql.cloudfront.net/product_images/781137_66072400-f3bc-43cf-8156-ffb427cb9666.jpg', 'iphone14 pro',1);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('iPhone 14', 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-pro-max-deep-purple-back.png?v=35', 'iphone14', 1);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Galaxy S23', 'https://cdn.lesnumeriques.com/optim/product/71/71213/92553e9f-galaxy-s23__450_400.png', 'GalaxyS23', 2);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Galaxy S23+', 'https://images.samsung.com/is/image/samsung/p6pim/fr/2302/gallery/fr-galaxy-s23-s916-sm-s916bzgdeub-534902073?$650_519_PNG$', 'Galaxy S23+', 2);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Galaxy S23 Ultra', 'https://feeds.pixmania.com/images/bfe564daa29e4c3eab9ca7834c2e7e2e.png', 'Galaxy S23 Ultra', 2);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Pixel 7a', 'https://lh3.googleusercontent.com/c0-y34SreBdah151k6_alm1d5myI_bzTLcmM47QcdcNz8WxJzqMJpKRVI5FK-EQeq41t7NxQNXTKgpZw7xQmehvYSkqfeReTL9A=rw-e365-nu-w1050', 'Pixel 7a', 3);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Pixel 6a', 'https://fr.mytrendyphone.be/images/Nillkin-Super-Frosted-Shield-Case-for-Google-Pixel-6a-Blue-12072022-01-p.webp', 'Pixel 6a', 3);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Xiaomi 13 Pro', 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677132762.26493129!800x800!85.png', 'Xiaomi 13 Pro', 4);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Xiaomi 13', 'https://images.frandroid.com/wp-content/uploads/2022/12/xiaomi-13-frandroid-2023.png', 'Xiaomi 13', 4);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Redmi Note 12', 'https://i05.appmifile.com/229_item_fr/26/06/2023/70c227327bcf764b33baf2c6d48f93f9!800x800!85.png', 'Redmi Note 12', 4);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Redmi 12C','https://www.cdiscount.com/pdt2/4/0/6/1/350x350/XIA6941812715406/rw/xiaomi-redmi-12c-128go-4g-vert.jpg', 'Redmi 12C', 4);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Fairphone 3+', 'https://shop.fairphone.com/media/catalog/product/cache/f951d578fe9eab859de9806fdcf92465/f/p/fp3p_perspective_2.jpg', 'Fairphone 3+', 5);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Fairphone 4', 'https://leclaireur.fnac.com/wp-content/uploads/4d/8718819372103/9225843-pictures-defaut.png', 'Fairphone 4', 5);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Xperia 10 V', 'https://cdn.lesnumeriques.com/optim/product/73/73415/9ae203f0-xperia-10-v__450_400.jpg', 'Xperia 10 V', 6);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('Xperia 5 IV','https://sony.scene7.com/is/image/sonyglobalsolutions/PDX-224_Primary-Image_Green_hyperc?$S7Product$&fmt=png-alpha', 'Xperia 5 IV', 6);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('HUAWEI Mate 50 Pro','https://images.frandroid.com/wp-content/uploads/2022/11/huawei-mate-50-pro-frandroid-2022.png' ,'HUAWEI Mate 50 Pro', 7);

INSERT INTO models (name, image_src, image_alt, brands_id)
VALUES ('HUAWEI Mate Xs 2', 'https://m.media-amazon.com/images/I/51yfhOStsSL._AC_UF1000,1000_QL80_.jpg', 'Huawei Mate Xs 2', 7);

INSERT INTO networks (name)
VALUES ('3G'), ('4G'), ('5G');

INSERT INTO RAM (name)
VALUES (1), (2), (3), (4), (6), (8), (16), (32);

INSERT INTO storages (capacity)
VALUES (16), (32), (64), (128), (256), (512), (1000);

INSERT INTO screen_size (size)
VALUES (3), (4), (5), (6), (7);

INSERT INTO states (name)
VALUES ('DEEE'), ('Réparable'), ('Bloqué'), ('Reconditionnable'), ('Reconditionné');

INSERT INTO phones (IMEI, is_loader_included, is_cable_included, model_id, network_id, RAM_id, storage_id, screen_size_id, state_id, price)
VALUES (353897409441576, false, false, 1, 2, 5, 3, 5, 4, 120);

INSERT INTO phones (IMEI, is_loader_included, is_cable_included, model_id, network_id, RAM_id, storage_id, screen_size_id, state_id, price)
VALUES (783897125641576, false, true, 5, 2, 5, 4, 1, 5, 90);

INSERT INTO phones (IMEI, is_loader_included, is_cable_included, model_id, network_id, RAM_id, storage_id, screen_size_id, state_id, price)
VALUES (789456123015928, true, true, 11, 2, 3, 5, 5, 5, 50);

INSERT INTO phones (IMEI, is_loader_included, is_cable_included, model_id, network_id, RAM_id, storage_id, screen_size_id, state_id, price)
VALUES (963258741023598, true, true, 7, 3, 3, 3, 3, 3, 80);

INSERT INTO phones (IMEI, is_loader_included, is_cable_included, model_id, network_id, RAM_id, storage_id, screen_size_id, state_id, price)
VALUES (598733012547158, true, false, 15, 1, 1, 1, 1, 1, 0);

INSERT INTO phones (IMEI, is_loader_included, is_cable_included, model_id, network_id, RAM_id, storage_id, screen_size_id, state_id, price)
VALUES (563981246852315, true, true, 14, 2, 7, 4, 3, 3, 180);