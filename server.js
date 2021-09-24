const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const apiRoutes = require("./routes/apiRoutes.js");
const viewRoutes = require("./routes/viewRoutes.js");

const app = express();
console.log("!!!! Look here !!!!!!" + app);
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));

//connect mongoose here
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(apiRoutes);
// app.use(viewRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
