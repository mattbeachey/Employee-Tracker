DROP DATABASE IF EXISTS employee_tracker_DB;

CREATE DATABASE employee_tracker_DB;

USE employee_tracker_DB;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary  DECIMAL (10,2),
    department_id INT,
    PRIMARY kEY (id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT, 
    manager_id INT,
    PRIMARY KEY (id)
)

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (id, Matt, Beachey)

INSERT INTO
VALUES

INSERT INTO
VALUES