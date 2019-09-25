const db = require("../models")

module.exports = {

 insertUsers: function(req, res) {
    db.Inventory.insertMany([
   {
        imageURL: "./assets/images/ducksprites/duckbody/red.png",
        Properties: {
         level: "1",
         bodypart: "duckbody",
         color: "red"
       }
     },

     {
        imageURL: "./assets/images/ducksprites/duckhead/purple_hat.png",
        Properties: {
         level: "1",
         bodypart: "duckhead",
         color: "purple"
       }
     },

     {
        imageURL: "./assets/images/ducksprites/duckbeak/blue.png",
        Properties: {
         level: "1",
         bodypart: "beak",
         color: "blue"
       }
     },

     {
      imageURL: "./assets/images/ducksprites/duckeye/blue.png",
      Properties: {
       level: "1",
       bodypart: "eyes",
       color: "blue"
     }
   },

   {
    imageURL: "./assets/images/ducksprites/duckeyegear/duck_monocle.png",
    Properties: {
     level: "1",
     bodypart: "eyegear",
     color: ""
   }
 },

 {
  imageURL: "./assets/images/ducksprites/duckitem/blue_balloon.png",
  Properties: {
   level: "1",
   bodypart: "item",
   color: "blue"
 }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/blue.png",
  Properties: {
   level: "1",
   bodypart: "wing",
   color: "blue"
 }
},

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