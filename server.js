const express = require("express");
const path = require("path");
const routes = require('./Routes')
// const PORT = process.env.PORT || 7300;
const PORT = 7300
const app = express();
const mongoose = require('mongoose')
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
      if (err) return reject(err)
      app.listen(PORT, function() {
        console.log(`🌎 ==> API server now on port ${PORT}!`);
      });
      db = client.db("Ducks")


      console.log("connected to mango")
      return resolve(client)
    })
  })
}

// Routes
 app.use(routes)

// Send every request to the React app
// Define any API routes before this runs
 app.get("*", function(req, res) {
   res.sendFile(path.join(__dirname, "./client/build/index.html"));
 });


