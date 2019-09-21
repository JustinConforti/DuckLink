const db = require("../models");

// match with api/users
module.exports = {
userData:function (req, res) {
        if (req.session && req.session.user && req.session.user.data) {
          console.log(req.session.user.data)
          return res.json(req.session.user.data)
        } else {
          return res.status(403).json({s:"Not logged in"})
        }
      }
    }

