const mongoose = require("mongoose");

const todoListItemSchema = new mongoose.Schema(
  {
    listName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TodoListItem", todoListItemSchema);
