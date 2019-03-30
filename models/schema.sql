DROP DATABASE IF EXISTS hikersdb;
CREATE DATABASE hikersdb;
USE hikersdb;

-- Created the table "users" --
CREATE TABLE users
(
  id INT AUTO_INCREMENT,
  email VARCHAR(30) NOT NULL,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  location VARCHAR(30) NOT NULL,
  passport VARCHAR(30),
  PRIMARY KEY(id)
);
