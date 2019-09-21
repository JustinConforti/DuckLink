const db = require("../models");

module.exports = {

userLogin: function(username, password, done) {
		console.log(req.body)
		const { username, password } = req.body
	  
		// if user didn't send a username/password
		if (!username || !password) {
		  return res.status(400)
		}
	  
		db.collection('users')
		  .findOne({ username })
		  .then(data => {
			// if user doesn't exist, kick out
			if (!data) return res.status(401).json({err:"invalid user/password"})
	  
			// check if passwords match
			if (bcrypt.compareSync(password, data.password)) {
			  // update users session, return status
			  req.session.user = data
			  console.log(req.session.user)
			  return res.json({
				s: "Logged in"
			  })
			} else {
			  // kick user out, since passwords don't match
			  return res.status(401).json({err:"invalid user/password"})
			}
		  })
		  // in case something breaks
		  .catch(err => {
			return res.status(500).json(err)
		  })
	  }
	}