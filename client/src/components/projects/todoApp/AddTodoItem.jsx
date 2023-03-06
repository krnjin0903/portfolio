import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addTodoItem } from "../../../features/todoSlice";
import todoServices from "../../../services/todoService";
import { Modal } from "react-bootstrap";
const AddTodoItem = () => {
  const dispatch = useDispatch();
  const listName = useSelector((state) => state.todoList.listName);

  const initialValues = {
    description: "",
  };

  const validationSchema = Yup.object({
    description: Yup.string().required("Write a new item to add to the list"),
  });

  const onSubmit = (value) => {
    const { description } = value;
    const payload = {
      listName,
      data: { description },
    };
    todoServices
      .addNewItem(payload)
      .then(onAddNewItemSuccess)
      .catch(onAddNewItemError);
    setShow(!show);
  };

  const onAddNewItemSuccess = (response) => {
    console.log(response);
    dispatch(addTodoItem(response.data.todoItem));
  };

  const onAddNewItemError = (error) => {
    console.log(error);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div className="addButton">
        <button onClick={handleShow}>+</button>
      </div>
      <Modal show={show} onHide={handleShow} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title className="addTodoModalTitle">Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body className="addTodoModalBody">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="row">
                <Field type="text" name="description" />
              </div>
              <div className="row">
                <p className="errorMessage">
                  <ErrorMessage name="description" />
                </p>
              </div>
              <div className="row">
                <button type="submit">Add New Item</button>
              </div>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddTodoItem;
