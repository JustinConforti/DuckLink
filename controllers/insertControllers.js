const db = require("../models")

module.exports = {

 insertUsers: function(req, res) {
    db.Inventory.insertMany([
   {
        imageURL: "./client/public/assets/images/duckbody/red.png",
        Properties: {
         bodypart: "duckBody",
         color: "red"
       }
     },
     {
        imageURL: "./client/public/assets/images/duckhead/purple_hat.png",
        Properties: {
         bodypart: "duckhead",
         color: "purple"
       }
     },
     {
        imageURL: "./client/public/assets/images/duckbeak/blue.png",
        Properties: {
         bodypart: "duckbeak",
         color: "blue"
       }
     }
    ]).then(data => {
      console.log(data)
      res.json(data)
    })
},

  random: function(req, res) {
    db.Inventory.aggregate([{ $sample: { size: 4 } }])
    .then(data => {
      console.log(data)
     return res.json({data});
    })
  }
}