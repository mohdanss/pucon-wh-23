const mongoose = require('mongoose');
const { log, elog } = require('../utils/utils');

const MONGO_URI = process.env.MONGO_URI;

mongoose.set("debug", true);
mongoose.set("strictQuery", true);


const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        log("MongoDB connection established successfully!");
    }
    catch (err){
        elog(err);
    }
};

module.exports = connectToDatabase;