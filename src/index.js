const path = require("path");
const express = require("express");
const helmet = require("helmet");
const hbs = require("hbs");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const messageEmail = require("./email/email");
const Post = require("./models/post");
const { initializePassport, authenticated, notAuthenticated } = require("./auth/passport");
require("./db/mongoose");

initializePassport(passport);

const app = express();
app.use(helmet());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

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

    if (req.body.email) email = req.body.email;
    if (req.body.name) name = req.body.name;

    const message = req.body.compose;
    messageEmail(email, name, message);
    res.render("submitted", { message: "Message submitted. We will get back to you in less than 24 hours" });
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/blog/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const post = await Post.findOne({ _id })
        if (!post) return res.render("notfound");
        res.render("blogpost", {
            title: post.title,
            body: post.body,
            created: post.createdAt
        });
    } catch (err) {
        res.render("notfound");
    }
});
app.get("/blog", (req, res) => {
    res.render("blog");
});

app.get("/compose", authenticated, (req, res) => {
    res.render("compose");
});
app.post("/compose", authenticated, async (req, res) => {
    const post = new Post(req.body);
    try {
        await post.save((err, post) => {
            res.redirect(`/blog/${post._id}`);
        });
    } catch (err) {
        res.status(400).send(err);
    }
});

app.get("/login", notAuthenticated, (req, res) => {
    res.render("login");
});
app.post("/login", notAuthenticated, passport.authenticate("local", {
    successRedirect: "/compose",
    failureRedirect: "/login",
    failureFlash: true
}));
app.get("/logout", (req, res) => {
    res.render("logout")
})
app.delete("/logout", (req, res) => {
    req.logOut();
    res.redirect("/login");
});

app.get("*", (req, res) => {
    res.status(404).render("notfound");
});

app.listen(process.env.PORT || 1337);
