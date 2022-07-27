const Spend = require("../models/spendModel");
const date = new Date().toJSON().slice(0, 10).replace(/-/g, ".");

module.exports.getAllSpends = (req, res) => {
  Spend.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.send("Error!", err);
    });
};

module.exports.createSpend = (req, res) => {
  const body = req.body;
  if (body.hasOwnProperty("spendName") && body.hasOwnProperty("spendValue")) {
    body.spendDate = date;
    Spend.create(body).then((result) => {
      res.status(200).send(result);
    });
  } else {
    res.status(400).send("Error! Params not correct");
  }
};
