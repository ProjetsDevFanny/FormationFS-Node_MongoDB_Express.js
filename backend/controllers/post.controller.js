const PostModel = require("../models/post.model");

// CRUD = Create, Read, Update, Delete = get, post, put, delete

// =======================READ (GET)=======================================

// fonction qui s'exporte automatiquement:
// controller pour lister les posts
module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};

// =======================CREATE (POST)=======================================

// controller pour créer un post
// Ne pas oublier de le mettre dans le post.routes.js !
module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Message is required" });
  }
  // création d'un post
  const post = await PostModel.create({
    message: req.body.message,
    author: req.body.author,
  });
  res.status(200).json(post);
};

// =======================UPDATE (PUT)=======================================

// controller pour modifier un post
// Ne pas oublier de le mettre dans le post.routes.js !
module.exports.editPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(400).json({ message: "Post not found" });
  }

  const updatedPost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });
  res.status(200).json(updatedPost);
};
// post = (l'id du post que nous voulons modifier)
// req.body = (les données que nous voulons modifier)
// { new: true } = (nous retourne le post modifié)

// =======================DELETE (DELETE)=======================================

// controller pour supprimer un post
// Ne pas oublier de le mettre dans le post.routes.js !
module.exports.deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(400).json({ message: "Post not found" });
  }
  await post.deleteOne();
  res.status(200).json({ message: `Post deleted ${req.params.id}` });
};

// =======================LIKE (PATCH)=======================================

// controller pour liker un post
// Ne pas oublier de le mettre dans le post.routes.js !
module.exports.likePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: {
          likers: req.body.userId,
        },
      },
      { new: true } //pour ne pas bloquer la BD
    ).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// =======================DISLIKE (PATCH)=======================================

// controller pour ne pas liker un post
// Ne pas oublier de le mettre dans le post.routes.js !
module.exports.dislikePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        // On retire l'utilisateur de la liste des likers:
        $pull: {
          likers: req.body.userId,
        },
      },
      { new: true } //pour ne pas bloquer la BD
    ).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
