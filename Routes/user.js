const express = require("express");

const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUserBy,
} = require("../controllers/user");

router.route("/").get(handleGetAllUsers).post(handleCreateNewUserBy);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
