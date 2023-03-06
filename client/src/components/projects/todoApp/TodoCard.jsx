import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItem, deleteTodoItem } from "../../../features/todoSlice";
import todoServices from "../../../services/todoService";

const TodoCard = ({ todo, index }) => {
  const listName = useSelector((state) => state.todoList.listName);
  const dispatch = useDispatch();

  const deleteItem = (e) => {
    const payload = {
      listName,
      data: {
        id: todo._id,
      },
    };

    todoServices.deleteItem(payload).then(onDeleteSuccess).catch(onDeleteError);
    e.stopPropagation();
  };

  const onDeleteSuccess = (response) => {
    console.log("deleteSuccess", response);
    const payload = {
      id: response.data.deleted._id,
    };
    dispatch(deleteTodoItem(payload));
  };

  const onDeleteError = (error) => {
    console.log("deleteError", error);
  };
  const onClickCard = () => {
    const payload = {
      index,
      listName,
      data: {
        id: todo._id,
        completed: !todo.completed,
      },
    };

    console.log(payload);

    const onUpdateSuccess = (response) => {
      console.log("updateSuccess", response);
      dispatch(updateItem(payload));
    };

    todoServices.updateItem(payload).then(onUpdateSuccess).catch(onUpdateError);
  };

  const onUpdateError = (error) => {
    console.log("updateError", error);
  };
  return (
    <div className="todoCard" onClick={onClickCard}>
      <div className={`todoDescription ${todo.completed ? "completed" : ""}`}>
        {todo.description}
      </div>
      <button className="itemDelete" onClick={deleteItem}>
        X
      </button>
    </div>
  );
};

export default TodoCard;
