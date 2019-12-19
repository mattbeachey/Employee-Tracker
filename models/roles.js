const sequelize = require("./config/connection")

const Roles = sequelize.define('roles', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salary: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    department_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    // options
});

module.exports = roles;