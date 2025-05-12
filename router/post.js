const express = require("express");
const { createPost, postById, deletePost, fetchPosts } = require("../controller/postController");
const router = express.Router();

router.route("/create-post").post(createPost)
router.route("/posts").get(fetchPosts)
router.route('/post/:id').get(postById).delete(deletePost)

module.exports = router