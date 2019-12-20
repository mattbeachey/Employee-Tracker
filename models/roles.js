module.exports = function(sequelize, DataTypes) {
const roles = sequelize.define("roles", {
    // attributes
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
{
    // options
    timestamps: false
}
);

return roles

};
