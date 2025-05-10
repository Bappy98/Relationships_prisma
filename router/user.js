const express = require("express");
const { createUser, getUsers, findById, updateUser, deleteUser } = require("../controller/userController");
const router = express.Router();

router.route("/create-user").post(createUser)
router.route("/all-users").get(getUsers)
router.route('/user/:id').get(findById).put(updateUser).delete(deleteUser)

module.exports = router