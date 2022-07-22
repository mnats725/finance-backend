const express = require("express");
const router = express.Router();

const { getAllSpends } = require("../controllers/spends.controller");

router.get("/AllSpends", getAllSpends);

module.exports = router;
