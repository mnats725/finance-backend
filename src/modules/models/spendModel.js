const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spendsScheme = new Schema({
  spendName: String,
  spendValue: Number,
  spendDate: String,
});

module.exports = Spend = mongoose.model("spends", spendsScheme);
