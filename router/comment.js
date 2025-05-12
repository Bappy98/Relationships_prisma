const express = require("express");
const { createComment, fetchComments, showComments, deleteComment } = require("../controller/comment");
const router = express.Router();


router.route("/create-comment").post(createComment)
router.route("/comments").get(fetchComments)
router.route('/comment/:id').get(showComments).delete(deleteComment)    

module.exports = router