const sequelize = require("./config/connection")

const Departments = sequelize.define('departments', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    // options
});

module.exports = departments;