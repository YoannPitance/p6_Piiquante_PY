const express = require("express");
const mongoose = require("mongoose");
const Sauce = require("./models/Sauce");
const userRoutes = require("./routes/user-route");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

mongoose.set("strictQuery", true);

mongoose
  .connect(
    "mongodb+srv://YoannP:YoannP@projet6db.qsz3va9.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

module.exports = app;

app.use("/api/auth", userRoutes);

module.exports = app;
