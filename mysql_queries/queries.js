// const connection = require ("../config/connection")
const db = require ("../models")

const query = {

 viewAll(cb){
    db.employees.findAll({}).then(function(res){
      const nameArray = []
      res.forEach(element => {
        // console.log(element.first_name + " " + element.last_name);
        name = element.first_name + " " + element.last_name
        nameArray.push(name)
      });
      cb(nameArray)
    })
    
    
}


}

module.exports = query
