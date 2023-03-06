const express = require("express");
const router = express.Router();
const {
  createNewTodoItem,
  getTodoItemsByName,
  updateItem,
  deleteItem,
} = require("../controllers/todoController");

router
  .route("/:listName")
  .get(getTodoItemsByName)
  .post(createNewTodoItem)
  .patch(updateItem)
  .delete(deleteItem);

module.exports = router;
