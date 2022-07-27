const express = require("express");
const router = express.Router();

const {
  getAllSpends,
  createSpend,
} = require("../controllers/spends.controller");

router.get("/AllSpends", getAllSpends);
router.post("/createSpend", createSpend);

module.exports = router;
