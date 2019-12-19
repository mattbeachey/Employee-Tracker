const Sequelize = require('sequelize');
const sequelize = require ("../config/connection");

const Employees = sequelize.define('employees', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    manager_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    // options
});

Employees.sync();

module.exports = Employees;