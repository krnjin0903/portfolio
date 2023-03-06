import React from "react";
import "./todo.css";
import TodoCard from "./TodoCard";
import GetTodoList from "./GetTodoList";
import AddTodoItem from "./AddTodoItem";
import { useSelector } from "react-redux";

const Todo = () => {
  const todoList = useSelector((state) => state.todoList.todoList);

  const mapTodo = (todo, index) => {
    return <TodoCard todo={todo} index={index} key={todo._id} />;
  };
  return (
    <React.Fragment>
      <div className="todoApp">
        <h2>Todo List App</h2>
        <div className="container">
          <GetTodoList />
          {todoList ? (
            <div>
              <AddTodoItem /> {todoList.map(mapTodo)}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Todo;
