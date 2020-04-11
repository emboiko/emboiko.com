const mongoose = require("mongoose");

function initializeMongoose() {
    mongoose.connect(process.env.MONGODB_URL,
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
}

module.exports = initializeMongoose;
