const db = require("../models");

// match with api/users
module.exports = {
registerUser:function (req, res) {
    console.log(req.body)
    let body = req.body,
      email = body.email
      username = body.username;
      password = body.password;
      db.User.findOne({username:username}, function(err, doc) {
      if(err) {res.status(500).send(`error occured`)}
        else {
          if(doc) {
            res.status(500).send(`Username already exists`)
          } else {
            let newUser = new db.User()
            newUser.email = email;
            newUser.username = username;
            newUser.password = password;
            newUser.save(function(err, user) {
              if(err) {
                res.status(500).send(`db error`)
              } else {
                res.send(user)
              }
          })
        }
      }
    })
  }
}