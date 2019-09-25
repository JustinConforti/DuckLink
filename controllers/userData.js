const db = require("../models");

// match with api/users
module.exports = {
userData:function (req, res) {

          console.log("user.data controller ")
          console.log(req.session.user)
          return res.json(req.session.user)
         
      }
    }

