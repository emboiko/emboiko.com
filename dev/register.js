////////////////////////////////
//Remove me in production ALWAYS
////////////////////////////////
// app.get("/register", notAuthenticated, (req, res) => {
//     res.render("register");
// });
// app.post("/register", notAuthenticated, async (req, res) => {
//     const user = new User(req.body);
//     try {
//         await user.save();
//         res.redirect("/login");
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });
/////////////////////////////////