import React from "react";
import { Formik, Form, Field } from "formik";
import todoServices from "../../../services/todoService";
import { useDispatch, useSelector } from "react-redux";
import { setListName, setTodoItems } from "../../../features/todoSlice";

const GetTodoList = () => {
  const list = useSelector((state) => state.todoList.listName);
  const dispach = useDispatch();
  const initialValues = {
    listName: "",
  };

  const onSubmit = (value) => {
    const { listName } = value;

    const onGetTodoItemsSuccess = (response) => {
      dispach(setListName(listName));
      dispach(setTodoItems(response.data.items));
      console.log(response);
    };

    todoServices
      .getTodoItemByName(listName)
      .then(onGetTodoItemsSuccess)
      .catch(onGetTodoItemsError);
  };

  const onGetTodoItemsError = (error) => {
    console.log(error);
  };
  return (
    <React.Fragment>
      <div className="getTodoList">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <Field
              type="text"
              name="listName"
              placeholder="Enter a list name"
            />
            <button type="submit">Get List</button>
          </Form>
        </Formik>
        <div className="listName">{list ? list : ""}</div>
      </div>
    </React.Fragment>
  );
};

export default GetTodoList;
