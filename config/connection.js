// const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",


//   port: 3306,


//   user: "root",


//   password: "root",
//   database: "employee_tracker_DB"
// });

// connection.connect(function (err) {
//     if (err) throw err;
// });


// module.exports = connection


// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('employee_tracker_DB', 'root', 'root', {
//     host: "localhost",
//     port: 3306,
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//       }
//   });

// Testing the connection:
//   sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

//   module.exports = sequelize;