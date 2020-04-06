const path = require("path");
const express = require("express");
const helmet = require("helmet");
const hbs = require("hbs");

const app = express();

app.use(helmet());
app.use(express.static("public"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/projects", (req, res) => {
    res.render("projects");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("/blog", (req, res) => {
    res.render("blog");
});

app.listen(process.env.PORT);
