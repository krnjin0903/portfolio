import axios from "axios";

const todoEndpoint = `${process.env.REACT_APP_URL}/api/todo`;

const getTodoItemByName = (listName) => {
  const config = {
    method: "GET",
    url: `${todoEndpoint}/${listName}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const updateItem = (payload) => {
  const config = {
    method: "Patch",
    url: `${todoEndpoint}/${payload.listName}`,
    data: payload.data,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const deleteItem = (payload) => {
  const config = {
    method: "Delete",
    url: `${todoEndpoint}/${payload.listName}`,
    data: payload.data,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const addNewItem = (payload) => {
  const config = {
    method: "POST",
    url: `${todoEndpoint}/${payload.listName}`,
    data: payload.data,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const todoServices = { getTodoItemByName, addNewItem, updateItem, deleteItem };

export default todoServices;
