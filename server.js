const express = require("express");
const path = require("path");
const mongoose = require("mongoose")
const app = express();
const session = require("express-session")
const passport = require("passport");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Ducks", { useNewUrlParser: true });

// Used to keep track of our user's login status
app.use(session({secret:"theSecret", saveUninitialized:false, resave:false}))
app.use(passport.initialize());
app.use(passport.session());


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes)

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
