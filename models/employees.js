module.exports = function (sequelize, DataTypes) {
    const employees = sequelize.define("employees", {
        // attributes
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        manager_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // createdAt: {
        //     autoIncrement
        // }
    },
    {
        // options
        timestamps: false
    });
    return employees;

}

