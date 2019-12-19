//npm dependencies
const sequelize = require ("./config/connection");
const inquirer = require ("inquirer")
const consoleTable = require ("console.table")




//model dependencies
const Roles = require ("./models/roles")
const Departments = require ("./models/departments")
const Employees = require ("./models/employees")