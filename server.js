require('dotenv').config();
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cookieParser = require("cookie-parser");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ defaultLayout: "main" });

const app = express();
const PORT = process.env.PORT;

const sequelize = require ("./config/connection.js");

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
app.use(express.json());

const routes = require("./routes/index");
app.use('/', routes)

hbs.handlebars.registerPartial("header", './views/partials/header');
hbs.handlebars.registerPartial("profileCard", './views/partials/profileCard');
hbs.handlebars.registerPartial("taskList", './views/partials/taskList');
hbs.handlebars.registerPartial("rewardList", './views/partials/rewardList');

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});