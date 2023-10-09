const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db");
const sequelize = require("sequelize");
const routes = require("./routes/routes");

// ...

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());

// ...

app.use("/", routes);
app.use("/static", express.static(path.join(__dirname, "static")));

const port = 3000;
app.listen(port, function () {
  db.conn
    .authenticate()
    .then(function () {
      console.log("Database terhubung");
    })
    .catch(function (err) {
      console.log("Database gagal terhubung karena:", err);
    });
  console.log("server start on", port);
});
