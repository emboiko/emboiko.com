const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
    },
});

userSchema.statics.findByCredentials = async (username, password, done) => {
    const user = await User.findOne({ username });
    if (!user) return done(null, false, { message: "No user with that username." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return done(null, false, { message: "Incorrect password." });

    return done(null, user);
}

userSchema.pre("save", async function (next) {
    const user = this;

    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10);
    }

    next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
