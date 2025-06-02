const express = require("express");
const router = express.Router(); //On est dans l'objet router de la biliothèque express

// CRUD = Create, Read, Update, Delete (= get, post, put, delete)

// // req = request = la requête que nous envoyons au serveur
// // res = response = la réponse que nous recevons du serveur

//On crée une route pour récupérer tous les posts
router.get("/", (req, res) => {
  res.json({ message: "Voici tous les posts" });
});

router.post("/", setPost);

// On crée une route pour modifier un post (mise à jour)
router.put("/:id", (req, res) => {
  // console.log(req.params.id);
  res.json({ messageId: `Voici le post ${req.params.id}` });
});

// On crée une route pour supprimer un post
router.delete("/:id", (req, res) => {
  res.json({ message: `Post supprimé avec succès ${req.params.id}` });
});

// On crée une route pour liker un post
router.patch("/like-post/:id", (req, res) => {
  res.json({ message: `Post liké: id: ${req.params.id}` });
});

// On crée une route pour ne pas liker un post
router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: `Post non liké: id: ${req.params.id}` });
});

//On exporte le router (tout notre projet aura accès à cette route)
module.exports = router;
