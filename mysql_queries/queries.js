// const connection = require ("../config/connection")
const db = require ("../models")

const query = {

  viewEmployees(cb){
    db.employees.findAll({}).then(function(res){
      const nameArray = []
      let newElement = []
      res.forEach(element => {
        // console.log(element.first_name + " " + element.last_name);
        name = element.first_name + " " + element.last_name
        nameArray.push(name)
        newElement = element
      });
      cb(nameArray, newElement)
    })
    
}


}

module.exports = query
