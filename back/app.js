const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Sauce = require("./models/Sauce");
const userRoutes = require("./routes/user-route");

mongoose
  .connect(
    "mongodb+srv://YoannP:YoannP@projet6db.qsz3va9.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  console.log("requette reçue");
});

app.use((req, res, next) => {
  res.json({ message: "votre requete a bien été reçue" });
});
app.use("/api/auth", userRoutes);

module.exports = app;
