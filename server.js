const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const MongoClient = require('mongodb').MongoClient
// my mongo connection/database
const client = new MongoClient("mongodb://localhost/Ducks", { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// const apiRoutes = require("./routes/apiRoutes");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Ducks", { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

let db 

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    maxAge: 86400000
  },
  store: new MongoStore({ clientPromise: connectToMongo() })
}))

function connectToMongo() {
  return new Promise((resolve, reject) => {
    client.connect(err => {
      console.log(err)
      if (err) return reject(err)

      db = client.db("Ducks")

      app.listen(PORT, function() {
        console.log(`🌎 ==> API server now on port ${PORT}!`);
      });
      
      return resolve(client)
    })
  })
}

app.post('/userLogin', (req, res) => {
  console.log(req.body)
  const { username, password } = req.body

  // if user didn't send a username/password
  if (!username || !password) {
    return res.status(400)
  }

  db.collection('users')
    .findOne({ username })
    .then(db => {
      // if user doesn't exist, kick out
      if (!db) return res.status(401).json({err:"invalid user/password"})

      // check if passwords match
      if (bcrypt.compareSync(password, db.password)) {
        // update users session, return status
        req.session.user = db
        return res.json({
          s: "Logged in"
        })
      } else {
        // kick user out, since passwords don't match
        return res.status(401).json({err:"invalid user/password"})
      }
    })
    // in case something breaks
    .catch(err => {
      return res.status(500).json(err)
    })
})

app.get('/myData', (req, res) => {
  if (req.session && req.session.user && req.session.user.data) {
    return res.json(req.session.user.data)
  } else {
    return res.status(403).json({s:"Not logged in"})
  }
})


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
// app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


