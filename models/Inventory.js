const mongoose = require("mongoose");
const schema = mongoose.Schema;
const inventorySchema = new schema({
    imageURL:{
		type:String,
		unique:true,
		required:true,
	},
    Properties:[
        {
            level: String,
            bodypart : String,
            color: String,

        }
     ]
});

const Inventory = mongoose.model("inventory", inventorySchema);
module.exports = Inventory;
