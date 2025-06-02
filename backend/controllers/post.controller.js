const PostModel = require("../models/post.model");

//fonction qui c'exporte automatiquement:
module.exports.setPosts = async (req, res) => {
  res.json({ message: "Post créé avec succès" });
};
