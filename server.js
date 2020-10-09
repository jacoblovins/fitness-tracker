const express = require("express");
const mongoose = require("mongoose");

// Set up server
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/routes"));

// Connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Start listening on the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});