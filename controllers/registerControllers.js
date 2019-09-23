const db = require("../models");
// match with api/users
module.exports = {
registerUser:function (req, res) {
    console.log(req.body)
    let body = req.body,
      email = body.email
      username = body.username;
      password = body.password;
      password2 = body.password2;
      console.log(password, password2)
      if (password!=password2) {
        res.status(500).send("Passwords must match.")
      } else {
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
}