const express = require('express');
const parser = require('body-parser');

const Controller = require('./db/controller')

const app = express();

app.use(parser.urlencoded({ extended: true}));

app.use(parser.json());

app.get("/", (req, res) => {
    res.redirect("/api/players")
});

app.use('/api/players', Controller);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});