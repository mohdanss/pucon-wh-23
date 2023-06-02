const router = require("express").Router();

const testRoutes = require("./testRoutes");

// api/test
router.use("/test", testRoutes);

module.exports = router;
