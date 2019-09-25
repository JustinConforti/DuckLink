const db = require("../models")

module.exports = {

 insertUsers: function(req, res) {
    db.Inventory.insertMany([
   {
        imageURL: "./assets/images/duckbody/red.png",
        Properties: {
         bodypart: "duckbody",
         color: "red"
       }
     },
     {
        imageURL: "./assets/images/duckhead/purple_hat.png",
        Properties: {
         bodypart: "duckhead",
         color: "purple"
       }
     },
     {
        imageURL: "./assets/images/duckbeak/blue.png",
        Properties: {
         bodypart: "beak",
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