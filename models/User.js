const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = mongoose.Schema;

const userSchema = new schema({

	email: {
    type: String,
    unique: true,
	match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
	required: true,
  	},

	username:{
		type:String,
		required:true,
	},

	password: {
		type: String,
		required: true,
	},

	date: {
		type: Date,
		default: Date.now
	},

	headgear: {
		type: String,
		default: "default"
	},

	eyes: {
		type: String,
		default: "default"
	},

	eyegear: {
		type: String,
		default: "default"
	},

	wing: {
		type: String,
		default: "default"
	},

	item: {
		type: String,
		default: "default"
	},

	beak: {
		type: String,
		default: "default"
	}
})

// Creating a custom method for our User model. 
// This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database

userSchema.methods.comparePassword = function(passw, cb) {
	bcrypt.compare(passw, this.password, function(err, isMatch) {
	  if (err) {
		return cb(err, false);
	  }
	  return cb(null, isMatch);
	});
  };

userSchema.pre("save", function(next) {
	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
	next();
});

const User = mongoose.model("users", userSchema);

module.exports = User;


