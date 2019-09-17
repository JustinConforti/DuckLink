const router = require("./node_modules/express").Router();
const bcrypt = require("./node_modules/bcryptjs")

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
            let newUser = new User()
            email = email;
            username = username;
            password = record.hashPassword(password)
            save(function(err, user) {
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

  // bcrypt.genSalt(10, (err, salt) =>
  //   bcrypt.hash(newUser.password, salt, (err, hash) =>
  //     if(err) throw err;
  //     // Set password to hashed
  //     newUser.password = has;
  //     // Save user
  //     newUser.save()
  //       .then()
  //       catch(err => console.log(err));

  //   )
  // )

  // Define routes.
