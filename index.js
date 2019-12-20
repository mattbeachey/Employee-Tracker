//npm dependencies
const sequelize = require("./config/connection");
const inquirer = require("inquirer")
const cTable = require("console.table")

//connection dependency
const connection = require("./config/connection")


//query ORM dependencies
const query = require("./mysql_queries/queries")

//seed dependencies
const seeds = require("./seeds")


// model dependencies
// const Roles = require ("./models/roles")
// const Departments = require ("./models/departments")
// const Employees = require ("./models/employees")
const db = require("./models")
db.sequelize.sync({ force: false }).then(function () {
    // db.departments.create({name: "development"}).then(function(){
    //     db.departments.findAll({}).then(function(res){
    //         console.log(res)
    //     })
    // })
    // seeds.employeeSeed()
    startingPrompt();
})

// console.log(db)

function startingPrompt() {
    const view = "View departments, roles, or employees";
    const add = "Add departments, roles, or employees";
    const update = "Update employee roles"

    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "Initializing Employee Tracker 3000. What would you like to do today?",
            choices: [view, add, update, "Quit"]
        },
    ])
        .then(function (data) {
            switch (data.userChoice) {
                case view:
                    viewDb()
                    break;

                case add:
                    addToDb()
                    break;

                case update:
                    updateDb()
                    break;

                case "Quit":
                    
                    return;
            }
        })
}


function viewDb() {
    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "Which database would you like to view?",
            choices: ["departments", "roles", "employees"]
        }
    ])
        .then(function (data) {
            userSelection = data.userChoice
            db[userSelection].findAll({}).then(function (res) {
                const nameArray = []
                res.forEach(element => {
                    name = element.dataValues 
                    nameArray.push(name)
                });
                console.table(nameArray)
            })


        });
}

function addToDb() {
    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "Which database would you like to add to?",
            choices: ["Departments", "Roles", "Employees"]
        }
    ])
        .then(function (data) {
            console.log("adding to database: " + data.userChoice)
        });
}

function updateDb() {
    query.viewEmployees(function (res) {
        inquirer.prompt([
            {
                type: "list",
                name: "userChoice",
                message: "Which employee would you like to update?",
                choices: res
            }
        ])
            .then(function (data) {
                console.log("employee updated: " + data.userChoice)
            });
    })

}