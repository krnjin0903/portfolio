const TodoItem = require("../models/todoListItemModel");

const createNewTodoItem = async (req, res) => {
  const { listName } = req.params;
  const { description } = req.body;

  if (!listName || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newTodo = await TodoItem.create({ listName, description });
    res.status(201).json({ todoItem: newTodo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTodoItemsByName = async (req, res) => {
  const { listName } = req.params;

  if (!listName) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const todoItems = await TodoItem.find({ listName }).sort({ createAt: -1 });
    res.status(200).json({ items: todoItems });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateItem = async (req, res) => {
  const { completed, id } = req.body;

  if (typeof completed !== "boolean" || !id) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const updatedItem = await TodoItem.findOneAndUpdate(
      { _id: id },
      { completed }
    );
    res.status(200).json({ item: updatedItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.body;

  try {
    const itemToDelete = await TodoItem.findByIdAndDelete(id);
    res.status(200).json({ deleted: itemToDelete });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createNewTodoItem,
  getTodoItemsByName,
  updateItem,
  deleteItem,
};
