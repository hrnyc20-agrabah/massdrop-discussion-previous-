PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;

DROP TABLE IF EXISTS 'product';
CREATE TABLE `product` (
  -- `id` INTEGER AUTO_INCREMENT DEFAULT 'NULL',
  `product_name` VARCHAR(200) NOT NULL DEFAULT 'NULL'
  -- PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS 'user';

CREATE TABLE `user` (
  -- `id` INTEGER AUTO_INCREMENT DEFAULT NULL,
 
  `username` VARCHAR(200) NULL DEFAULT NULL,
  `avatar` BLOB NULL DEFAULT NULL
  -- PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `product/threads`;

CREATE TABLE `product/threads` (
  -- `id` INTEGER AUTO_INCREMENT DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  `thread_id` INTEGER NULL DEFAULT NULL
  -- PRIMARY KEY (`id`)
    FOREIGN KEY (product_id) REFERENCES `product` (`id`),
  FOREIGN KEY (thread_id) REFERENCES `thread` (`id`)
);

DROP TABLE IF EXISTS `thread`;

CREATE TABLE `thread` (
  -- `id` INTEGER AUTO_INCREMENT DEFAULT NULL,
  -- PRIMARY KEY (`id`)

);


DROP TABLE IF EXISTS `thread discussion participants`;

CREATE TABLE `thread discussion participants` (
  -- `id` INTEGER AUTO_INCREMENT DEFAULT NULL,
  `thread_id` INTEGER NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL
  -- PRIMARY KEY (`id`),
  FOREIGN KEY (thread_id) REFERENCES `thread` (`id`),
  FOREIGN KEY (user_id) REFERENCES `user` (`id`)
);


DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  -- `id` INTEGER AUTO_INCREMENT DEFAULT NULL,
  `thread_id` INTEGER NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `body` VARCHAR(1000) NULL DEFAULT NULL,
  `sending_user_id` INTEGER NULL DEFAULT NULL,
  -- PRIMARY KEY (`id`),
  FOREIGN KEY (thread_id) REFERENCES `thread` (`id`),
  FOREIGN KEY (sending_user_id) REFERENCES `user` (`id`)
);
COMMIT;
