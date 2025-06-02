const PostModel = require("../models/post.model");

//fonction qui c'exporte automatiquement:
module.exports.setPost = async (req, res) => {
  res.json({ message: "Post créé avec succès" });
};
