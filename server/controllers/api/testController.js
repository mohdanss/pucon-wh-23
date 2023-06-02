const { log } = require("../../utils/utils");

const checkConnection = ((req, res) => {
	try {
		log("calling api/checkConnection");
		res.status(200).json({ message: "All Ok!" });
	} catch (err) {
		log("Error while checking connection");
		res.status(500).json({ message: "Error while checking connection" });
	}
});

module.exports = {
	checkConnection,
};
