const express = require("express");
const session = require("express-session");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
dotenv.config();

const { log, ip } = require("./utils/utils");
const connectToDatabase = require("./config/connection");
const routes = require("./routes");

connectToDatabase();

// creating the app
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

// initializing the session
const sess = {
	secret: "Very secret secret",
	cookie: {},
	resave: false,
	saveUninitialized: true,
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(cors());

server.listen(PORT, () => {
	log(`Server listening on port ${ip}:${PORT}`);
});
