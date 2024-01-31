require('dotenv').config();
const express = require('express');
const Sequelize = require('sequelize');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ defaultLayout: "main" });
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require ("./config/db.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  store: new SequelizeStore({
    db: sequelize,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(bodyParser.json());

const routes = require("./routes/index");
app.use('/', routes)

hbs.handlebars.registerPartial("header", './views/partials/header');
hbs.handlebars.registerPartial("profileCard", './views/partials/profileCard');
hbs.handlebars.registerPartial("taskList", './views/partials/taskList');
hbs.handlebars.registerPartial("rewardList", './views/partials/rewardList');

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});