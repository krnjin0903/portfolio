require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mailRoute = require("./routes/mailRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/mail", mailRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
