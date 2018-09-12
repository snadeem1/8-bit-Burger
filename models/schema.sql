DROP DATABASE IF EXISTS burger_bitdb;
CREATE DATABASE burger_bitdb;

use burger_bitdb;

CREATE TABLE meats
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
chosen boolean default false,
PRIMARY KEY (id)
);


CREATE TABLE buns
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
chosen boolean default false,
PRIMARY KEY (id)
);


CREATE TABLE cheeses
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
chosen boolean default false,
PRIMARY KEY (id)
);


CREATE TABLE veggies
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
chosen boolean default false,
PRIMARY KEY (id)
);

CREATE TABLE condiments
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
chosen boolean default false,
PRIMARY KEY (id)
);

CREATE TABLE sides
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
chosen boolean default false,
PRIMARY KEY (id)
);

CREATE TABLE drinks
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
chosen boolean default false,
PRIMARY KEY (id)
);

CREATE TABLE add_ons
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
chosen boolean default false,
PRIMARY KEY (id)
);
