const express = require("express");
const router = express.Router();

const {
  getAllSpends,
  createSpend,
  deleteSpend,
} = require("../controllers/spends.controller");

router.get("/AllSpends", getAllSpends);
router.post("/createSpend", createSpend);
router.delete("/deleteSpend", deleteSpend);

module.exports = router;
