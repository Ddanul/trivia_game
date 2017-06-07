// require express and path
const express = require("express");
const path = require("path");
// create the express app
const app = express();
// require bodyParser since we need to handle post data for adding a user
const bodyParser = require("body-parser");
const session = require("express-session");

const PORT = 8000;

app.use(bodyParser.json());
// static content
app.use(express.static(path.join(__dirname, "./client/dist")));

app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(session({
    secret: "generic secret",
    resave: false,
    saveUninitialized: false,
}))

require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

// tell the express app to listen on port 8000
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
})
