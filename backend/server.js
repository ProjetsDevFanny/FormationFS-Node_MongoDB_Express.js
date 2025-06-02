const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db");
const port = 5000;

// Connect to MongoDB ( à la DB)
connectDB();

const app = express();

// Middleware pour parser le JSON (traiter les données de la requête)
app.use(express.json());

// Middleware pour parser les données de la requête (urlencoded)
app.use(express.urlencoded({ extended: false }));

// On utilise le router pour les posts
app.use("/post", require("./routes/post.routes"));

// Pour lancer le serveur (sur le numéro de port 5000 = en local car c'est au localhost 5000)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
