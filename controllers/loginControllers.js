const db = require("../models");
const bcrypt = require('bcrypt')

module.exports = {

userLogin: function(req, res, err) {
	if (err) {
		console.log(err);
	}
			 const { username, password } = req.body
			 console.log("username:" + username);
			 console.log("password:" + password);
	  
		// if user didn't send a username/password
	  
		db.User
		  .findOne({ 'username': username }, function(err, user) {
			  console.log("data from promise here")
			  if (err) {
				  console.log(err)
			  }
			  console.log(user)
			// if user doesn't exist, kick out
			if (!user) return res.status(401).json({err:"invalid user/password"})
	  
			// check if passwords match
			if (bcrypt.compareSync(password, user.password)) {
			  // update users session, return status
			  req.session.user = user
			  console.log(req.session.user)
			  return res.json({
				s: req.session.user
			  })
			  
			} else {
			  // kick user out, since passwords don't match
			  return res.status(401).json({err:"invalid user/password"})
			}
		  })
		  // in case something breaks
	  }
};
