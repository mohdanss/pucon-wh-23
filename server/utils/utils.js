const log = (message) => {
	console.log("\x1b[33m%s\x1b[0m", "[MEN] " + message);
};

const elog = (message) => {
	console.log("\x1b[31m%s\x1b[0m", "[MEN] " + message);
};

const ip = require("ip").address();

// global exceptions
process.on("uncaughtException", (err) => {
	log(err);
	process.exit(1);
});

process.on("unhandledRejection", (err) => {
	log(err);
	process.exit(1);
});

module.exports = { log, elog, ip };
