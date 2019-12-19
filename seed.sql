


USE employee_tracker_DB;
INSERT INTO departments (name)
VALUES ('Accounts Receivable');
INSERT INTO departments (name)
VALUES ('HR');
INSERT INTO departments (name)
VALUES ('Operations');
INSERT INTO departments (name)
VALUES ('R&D');
INSERT INTO departments (name)
VALUES ('Strawberry');
INSERT INTO roles (title, salary, department_id)
VALUES ("Employee",1000000, 5);
INSERT INTO roles (title, salary, department_id)
VALUES ("Liason",900000, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Manager",20000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Vice President",2000000, 5);
INSERT INTO employees (first_name , last_name , role_id, manager_id)
VALUES ("Bill", "Joeman", 3, NULL);
INSERT INTO employees (first_name , last_name , role_id, manager_id)
VALUES ("Paul", "Hendrickson", 4, 1);
INSERT INTO employees (first_name , last_name , role_id, manager_id)
VALUES ("Billy", "Jean", 2, 1);
INSERT INTO employees (first_name , last_name , role_id, manager_id)
VALUES ("Frank", "Huricane", 1, 1);
INSERT INTO employees (first_name , last_name , role_id, manager_id)
VALUES ("Matt", "Beachey", 5, 1);