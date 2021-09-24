const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const apiRoutes = "./routes/apiRoutes";
const viewRoutes = "./routes/viewRoutes";

const app = express();
console.log("!!!! Look here !!!!!!" + app);
const PORT = process.env.PORT;

//connect mongoose here
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
