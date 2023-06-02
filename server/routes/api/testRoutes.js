const router = require("express").Router();
const controllers = require("../../controllers");

router.get("/", controllers.api.testController.checkConnection);

module.exports = router;
