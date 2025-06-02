const mongoose = require("mongoose");

// On créer un shéma pou notre base de données
const postSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    likers: {
      type: [String],
      default: [], // On initialise un tableau vide pour les likers
    },
  },
  { timestamps: true } // On ajoute les timestamps pour savoir quand le post a été créé et modifié
);

// On crée un modèle pour notre base de données
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
