const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

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
	}
})

userSchema.methods.hashPassword = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function (password, hash) {
	return bcrypt.compareSync(password, hash)
}

const User = mongoose.model("users", userSchema);

module.exports = User;