-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;
-- Create a database called programming_db --
CREATE DATABASE burgers_db;

-- Use programming db for the following statements --
USE burgers_db;
CREATE TABLE burgers(
-- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  -- Set the id as this table's primary key
  PRIMARY KEY (id)
);