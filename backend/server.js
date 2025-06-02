const express = require("express");
const port = 5000;

const app = express();

// // req = request = la requête que nous envoyons au serveur
// // res = response = la réponse que nous recevons du serveur
// app.get("/post", (req, res) => {
//   res.json({ message: "Hello World" });
// });

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
