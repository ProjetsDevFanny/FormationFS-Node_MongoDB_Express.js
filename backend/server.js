const PORT = 5000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const postRoutes = require("./routes/post.routes");
const dotenv = require("dotenv");
dotenv.config();

// Middleware pour parser le JSON (traiter les données de la requête)
app.use(express.json());

// Middleware pour parser les données de la requête (urlencoded)
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB ( à la DB)
connectDB();

// On utilise le router pour les posts
app.use("/post", postRoutes);

// Pour lancer le serveur (sur le numéro de port 5000 = en local car c'est au localhost 5000)
// const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
