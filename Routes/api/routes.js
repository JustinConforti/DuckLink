// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");
  });
//
  // Route for signing up a user. The user's password is automatically hashed.
  app.post("/signup", function(req, res) {
    console.log(req.file);
    console.log(req.body)
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }).then(function(user) {
      //console.log(arguments);
      res.render("members", user);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      res.json({
        username: req.user.username,
        id: req.user.id
      });
    }
  });
};



