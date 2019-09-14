const router = require("express").Router();
const usersControllers = require("../../controllers/usersControllers")

// match with api/users
module.exports = function(passport) {
	router.post('/', function (req, res) {
    let body = req.body,
      email = body.email
      username = body.username;
      password = body.password;
    User.findOne({username:username}, function(err, doc) {
      if(err) {res.status(500).send(`error occured`)}
        else {
          if(doc) {
            res.status(500).send(`Username already exists`)
          } else {
            let record = new User()
            record.email = email;
            record.username = username;
            record.password = record.hashPassword(password)
            record.save(function(err, user) {
              if(err) {
                res.status(500).send(`db error`)
              } else {
                res.send(user)
              }
            })
          }
        }
      })
    })
  }