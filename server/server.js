require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mailRoute = require("./routes/mailRoutes");
const todoRoute = require("./routes/todoRoutes");

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/mail", mailRoute);
app.use("/api/todo", todoRoute);

// connect to DB
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
