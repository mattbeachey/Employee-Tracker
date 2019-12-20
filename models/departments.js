module.exports = function (sequelize, DataTypes) {
    const departments = sequelize.define("departments", {
        // attributes
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        // options
        timestamps: false
    }
    );
    return departments;

}