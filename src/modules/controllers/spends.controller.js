const Spend = require("../models/spendModel");

module.exports.getAllSpends = (req, res) => {
  Spend.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.send("Error!", err);
    });
};
