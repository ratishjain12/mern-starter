const express = require("express");
const dbconnect = require("../config/db");
const cors = require("cors");
const router = require("./routes");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//PORT
const PORT = process.env.PORT || 3000;

//db connect
dbconnect();

//router
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server has started at PORT: ${PORT}`);
});
