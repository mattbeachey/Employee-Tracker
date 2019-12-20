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
const db = require("./models")

//syncing with database
db.sequelize.sync({ force: false }).then(function () {
    // db.departments.create({name: "development"}).then(function(){
    //     db.departments.findAll({}).then(function(res){
    //         console.log(res)
    //     })
    // })
    // seeds.employeeSeed()
    startingPrompt();
})


function startingPrompt() {
    const view = "View departments, roles, or employees";
    const add = "Add departments, roles, or employees";
    const update = "Update employee roles"
    console.log("///////////////////////////////////////////////////////////////////////////////////////")

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
            choices: ["departments", "roles", "employees", "return to main menu"]
        }
    ])

        .then(function (data) {
            switch (data.userChoice) {
                case "departments":
                    addDepartment()
                    break;

                case "roles":
                    addRole()
                    break;

                case "employees":
                    addEmployee()
                    break;

                case "return to main menu":
                    startingPrompt()
                    return;
            }
        })

}


function addDepartment() {
    inquirer.prompt([
        {
            message: "What is the name of this new department?",
            name: "userChoice"
        }
    ])

        .then(function (data) {
            userSelection = data.userChoice
            db.departments.create({ name: `${userSelection}` }).then(function () {
                console.log("added " + userSelection)
            })
        })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the Employee's First Name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the Employee's Last Name?" 
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the Employees Role Id?"
        },
        {
            type: "input",
            name: "manager_id",
            message: "What is the Employees Manager Id?"
        }
    ])

        .then(function (data) {
            userSelection = [data.first_name, data.last_name, data.role_id, data.manager_id]
            console.log("added " + userSelection)
            db.employees.create({ first_name: `${data.first_name}`, last_name: `${data.last_name}`, role_id: `${data.role_id}`, manager_id: `${data.manager_id}` }).then(function () {
                console.log("added " + userSelection)
            })
        })
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is this new role's name?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is this new role's salary?" 
        },
        {
            type: "input",
            name: "department_id",
            message: "What is this new role's department ID?"
        }
    ])

        .then(function (data) {
            userSelection = [data.title, data.salary, data.department_id, data.manager_id]
            console.log("added " + userSelection)
            db.roles.create({ title: `${data.title}`, salary: `${data.salary}`, department_id: `${data.department_id}` }).then(function () {
                console.log("added " + userSelection)
            })
        })
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