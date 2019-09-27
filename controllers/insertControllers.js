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

    {
      imageURL: "./assets/images/ducksprites/duckbeak/green.png",
      Properties: {
      level: "1",
      bodypart: "beak",
      color: "green"
    }
  },

    {
      imageURL: "./assets/images/ducksprites/duckbeak/orange.png",
      Properties: {
      level: "1",
      bodypart: "beak",
      color: "orange"
    }
  },

    {
      imageURL: "./assets/images/ducksprites/duckbeak/purple.png",
      Properties: {
      level: "2",
      bodypart: "beak",
      color: "purple"
    }
  },

    {
      imageURL: "./assets/images/ducksprites/duckbeak/red.png",
      Properties: {
      level: "3",
      bodypart: "beak",
      color: "red"
    }
  },

    {
      imageURL: "./assets/images/ducksprites/duckbody/akatsuki.png",
      Properties: {
      level: "10",
      bodypart: "duckbody",
      color: "black"
    }
  },

    {
      imageURL: "./assets/images/ducksprites/duckbody/blue.png",
      Properties: {
      level: "2",
      bodypart: "duckbody",
      color: "blue"
    }
  },

    {
      imageURL: "./assets/images/ducksprites/duckbody/darkblue.png",
      Properties: {
      level: "5",
      bodypart: "duckbody",
      color: "darkblue"
    }
  },

    {
      imageURL: "./assets/images/ducksprites/duckbody/green.png",
      Properties: {
      level: "2",
      bodypart: "duckbody",
      color: "green"
    }
  },

    {
      imageURL: "./assets/images/ducksprites/duckbody/pink.png",
      Properties: {
      level: "2",
      bodypart: "duckbody",
      color: "pink"
    }
  },

    {
      imageURL: "./assets/images/ducksprites/duckbody/white.png",
      Properties: {
      level: "3",
      bodypart: "duckbody",
      color: "white"
    }
  },

    {
      imageURL: "./assets/images/ducksprites/duckbody/yellow.png",
      Properties: {
      level: "1",
      bodypart: "duckbody",
      color: "yellow"
    }
  },

  {
    imageURL: "./assets/images/ducksprites/duckeye/bluegreenstar.png",
    Properties: {
     level: "4",
     bodypart: "eyes",
     color: "blue"
   }
 },

 {
  imageURL: "./assets/images/ducksprites/duckeye/green.png",
  Properties: {
   level: "2",
   bodypart: "eyes",
   color: "green"
 }
},

{
  imageURL: "./assets/images/ducksprites/duckeye/pink.png",
  Properties: {
   level: "3",
   bodypart: "eyes",
   color: "pink"
 }
},

{
  imageURL: "./assets/images/ducksprites/duckeye/red.png",
  Properties: {
   level: "2",
   bodypart: "eyes",
   color: "red"
 }
},

{
  imageURL: "./assets/images/ducksprites/duckeye/yellow.png",
  Properties: {
   level: "3",
   bodypart: "eyes",
   color: "yellow"
 }
},

{
  imageURL: "./assets/images/ducksprites/duckhead/blue_hat.png",
  Properties: {
   level: "5",
   bodypart: "duckhead",
   color: "blue"
 }
},

{
  imageURL: "./assets/images/ducksprites/duckhead/darkblue_hat.png",
  Properties: {
   level: "6",
   bodypart: "duckhead",
   color: "darkblue"
 }
},

{
  imageURL: "./assets/images/ducksprites/duckhead/green_hat.png",
  Properties: {
   level: "4",
   bodypart: "duckhead",
   color: "green"
 }
},

{
  imageURL: "./assets/images/ducksprites/duckhead/red_hat.png",
  Properties: {
   level: "4",
   bodypart: "duckhead",
   color: "red"
 }
},

{
  imageURL: "./assets/images/ducksprites/duckhead/white_hat.png",
  Properties: {
   level: "3",
   bodypart: "duckhead",
   color: "white"
 }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/darkbluebluestar_balloon.png",
  Properties: {
  level: "5",
  bodypart: "item",
  color: "darkblue"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/darkbluelightgreenstar_balloon.png",
  Properties: {
  level: "6",
  bodypart: "item",
  color: "darkblue"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/darkbluetripleheart_balloon.png",
  Properties: {
  level: "7",
  bodypart: "item",
  color: "darkblue"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/darkblueyellowstar_balloon.png",
  Properties: {
  level: "6",
  bodypart: "item",
  color: "darkblue"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/green_balloon.png",
  Properties: {
  level: "5",
  bodypart: "item",
  color: "green"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/lightgreendarkbluestar_balloon.png",
  Properties: {
  level: "7",
  bodypart: "item",
  color: "green"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/pinkblueheart_balloon.png",
  Properties: {
  level: "8",
  bodypart: "item",
  color: "pink"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/pinklightgreenstar_balloon.png",
  Properties: {
  level: "8",
  bodypart: "item",
  color: "pink"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/pinkyellowheartballoon.png",
  Properties: {
  level: "9",
  bodypart: "item",
  color: "pink"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/red_balloon.png",
  Properties: {
  level: "5",
  bodypart: "item",
  color: "red"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/redblueheart_balloon.png",
  Properties: {
  level: "7",
  bodypart: "item",
  color: "red"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/redbluestar_balloon.png",
  Properties: {
  level: "7",
  bodypart: "item",
  color: "red"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/redlightgreenstar_balloon.png",
  Properties: {
  level: "8",
  bodypart: "item",
  color: "red"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/redpinkstar_balloon.png",
  Properties: {
  level: "8",
  bodypart: "item",
  color: "red"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/redyellowstar_balloon.png",
  Properties: {
  level: "7",
  bodypart: "item",
  color: "red"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckitem/yellowredstar_balloon.png",
  Properties: {
  level: "6",
  bodypart: "item",
  color: "red"
  }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/bluedarkblueheart.png",
    Properties: {
    level: "4",
    bodypart: "wing",
    color: "blue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/bluedarkbluestar.png",
    Properties: {
    level: "4",
    bodypart: "wing",
    color: "blue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/bluegreenstar.png",
    Properties: {
    level: "4",
    bodypart: "wing",
    color: "blue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/bluelightgreenheart.png",
    Properties: {
    level: "4",
    bodypart: "wing",
    color: "blue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/bluepinkheart.png",
    Properties: {
    level: "4",
    bodypart: "wing",
    color: "blue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/blueredheart.png",
    Properties: {
    level: "5",
    bodypart: "wing",
    color: "blue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/blueredstar.png",
    Properties: {
    level: "5",
    bodypart: "wing",
    color: "blue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/blueyellowstar.png",
    Properties: {
    level: "5",
    bodypart: "wing",
    color: "blue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/clear.png",
    Properties: {
    level: "6",
    bodypart: "wing",
    color: "clear"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/darkblue.png",
    Properties: {
    level: "4",
    bodypart: "wing",
    color: "darkblue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/darkbluelightgreenheart.png",
    Properties: {
    level: "5",
    bodypart: "wing",
    color: "darkblue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/darkbluelightgreenstar.png",
    Properties: {
    level: "5",
    bodypart: "wing",
    color: "darkblue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/darkbluepinkheart.png",
    Properties: {
    level: "5",
    bodypart: "wing",
    color: "darkblue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/darkblueredheart.png",
    Properties: {
    level: "6",
    bodypart: "wing",
    color: "darkblue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/darkblueredstar.png",
    Properties: {
    level: "6",
    bodypart: "wing",
    color: "darkblue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/darkblueyellowheart.png",
    Properties: {
    level: "6",
    bodypart: "wing",
    color: "darkblue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/darkblueyellowstar.png",
    Properties: {
    level: "6",
    bodypart: "wing",
    color: "darkblue"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/green.png",
    Properties: {
    level: "2",
    bodypart: "wing",
    color: "green"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/pink.png",
    Properties: {
    level: "2",
    bodypart: "wing",
    color: "pink"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/pinkblueheart.png",
    Properties: {
    level: "5",
    bodypart: "wing",
    color: "pink"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/pinkbluestar.png",
    Properties: {
    level: "5",
    bodypart: "wing",
    color: "pink"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/pinklightgreenheart.png",
    Properties: {
    level: "7",
    bodypart: "wing",
    color: "pink"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/pinkredheart.png",
    Properties: {
    level: "7",
    bodypart: "wing",
    color: "pink"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/pinkredstar.png",
    Properties: {
    level: "7",
    bodypart: "wing",
    color: "pink"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/pinkyellowheart.png",
    Properties: {
    level: "7",
    bodypart: "wing",
    color: "pink"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/pinkyellowstar.png",
    Properties: {
    level: "7",
    bodypart: "wing",
    color: "pink"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/red.png",
    Properties: {
    level: "3",
    bodypart: "wing",
    color: "red"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/redbluestar.png",
    Properties: {
    level: "4",
    bodypart: "wing",
    color: "red"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/redlightgreenstar.png",
    Properties: {
    level: "5",
    bodypart: "wing",
    color: "red"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/redyellowstar.png",
    Properties: {
    level: "6",
    bodypart: "wing",
    color: "red"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/white.png",
    Properties: {
    level: "2",
    bodypart: "wing",
    color: "white"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/whitedarkblueheart.png",
    Properties: {
    level: "3",
    bodypart: "wing",
    color: "white"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/whitedarkbluestar.png",
    Properties: {
    level: "3",
    bodypart: "wing",
    color: "white"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/whitelightgreenheart.png",
    Properties: {
    level: "4",
    bodypart: "wing",
    color: "white"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/whitelightgreenstar.png",
    Properties: {
    level: "4",
    bodypart: "wing",
    color: "white"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/whitepinkheart.png",
    Properties: {
    level: "5",
    bodypart: "wing",
    color: "white"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/whitepinkstar.png",
    Properties: {
    level: "5",
    bodypart: "wing",
    color: "white"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/whiteredheart.png",
    Properties: {
    level: "6",
    bodypart: "wing",
    color: "white"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/whiteredstar.png",
    Properties: {
    level: "6",
    bodypart: "wing",
    color: "white"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/yellow.png",
    Properties: {
    level: "1",
    bodypart: "wing",
    color: "yellow"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/yellowblueheart.png",
    Properties: {
    level: "2",
    bodypart: "wing",
    color: "yellow"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/yellowbluestar.png",
    Properties: {
    level: "2",
    bodypart: "wing",
    color: "yellow"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/yellowdarkblueheart.png",
    Properties: {
    level: "3",
    bodypart: "wing",
    color: "yellow"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/yellowlightgreenstar.png",
    Properties: {
    level: "3",
    bodypart: "wing",
    color: "yellow"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/yellowredheart.png",
    Properties: {
    level: "4",
    bodypart: "wing",
    color: "yellow"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/yellowpinkheart.png",
    Properties: {
    level: "4",
    bodypart: "wing",
    color: "yellow"
    }
},

{
  imageURL: "./assets/images/ducksprites/duckwing/yellowredstar.png",
    Properties: {
    level: "5",
    bodypart: "wing",
    color: "yellow"
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