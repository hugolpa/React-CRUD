const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "us-cdbr-east-05.cleardb.net",
  user: "b597b0eda9d9c5",
  password: "2c734e5f",
  database: "heroku_f30eb8446fe52c2",
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use(cors()); // <---- use cors middleware
// mysql://b597b0eda9d9c5:2c734e5f@us-cdbr-east-05.cleardb.net/heroku_f30eb8446fe52c2?reconnect=true


app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;
  const { resumo } = req.body;

  let mysql = "INSERT INTO games (name, cost, category, resumo) VALUES (?, ?, ?, ?)";
  db.query(mysql, [name, cost, category, resumo], (err, result) => {
    res.send(result);
  });
});

app.post("/search", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;
  const { resumo } = req.body;
  let mysql = "SELECT * from games WHERE name = ? AND cost = ? AND category = ? AND resumo = ?";
  db.query(mysql, [name, cost, category, resumo], (err, result) => {
    if (err) res.send(err); res.send(result);
  });
});

app.get("/getCards", (req, res) => {
  let mysql = "SELECT * FROM games";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;
  const { resumo } = req.body
  let mysql = "UPDATE games SET name = ?, cost = ?, category = ?, resumo = ? WHERE id = ?";
  db.query(mysql, [name, cost, category, resumo, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM games WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(process.env.PORT || PORT, () => { console.log("rodando servidor"); });
