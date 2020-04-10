const path = require("path");
const express = require("express");
const helmet = require("helmet");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const messageEmail = require("./email/email");

const app = express();

app.use(helmet());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

mongoose.connect(process.env.MONGODB_URL, 
    {useNewUrlParser:true, useUnifiedTopology:true}
);

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/portfolio", (req, res) => {
    res.render("portfolio");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});
app.post("/contact", (req, res) => {
    let name = "Anonymous";
    let email = "Anonymous@emboiko.com";

    if (req.body.email) {
        email = req.body.email;
    }
    if (req.body.name) {
        name = req.body.name;
    }

    const message = req.body.compose;
    messageEmail(email, name, message);
    
    res.render("submitted",{message:"Message submitted. We will get back to you in less than 24 hours"});
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/blog", (req, res) => {
    res.render("blog");
});
app.get("/blog/:id", (req, res) => {
    res.render("blogpost");
});

app.get("/compose", (req, res) => {
    res.render("compose");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("*", (req, res) => {
    res.status(404).render("notfound");
});

app.listen(process.env.PORT || 1337);
