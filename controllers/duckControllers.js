const db = require("../models")

module.exports = {

	findById: function(req, res) {
	  db.User
		.findById(req.params.id)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	},

	create: function(req, res) {
	  db.User
		.create(req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	},
	
	update: function(req, res) {
	  db.Inventory
		.findOneAndUpdate({ _id: req.params.id }, req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	},

	updateReq: function(req, res) {
		console.log("within controller:");
		console.log(req.body.image)
		let bodypart = String(req.body.bodypart)
		let image = String(req.body.image)
		var query = {};
		query["username"] = req.session.user.username;
		query[bodypart] = image;
		console.log(req.session.user)
		db.User
		.findOneAndUpdate(query)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));

	}
}