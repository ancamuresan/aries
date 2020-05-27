'use strict';

module.exports = {
  responseToJSON,
  computeReport,
};

function responseToJSON(prop) {
  return function (req, res, next) {
    res.json(req.resources[prop]);
  };
}

function computeReport(prop1, prop2) {
  return function (req, res, next) {
    console.log(`Computing report for ${prop1} ${prop2}`);

    const prop1Value = req.resources[prop1];
    const prop2Value = req.resources[prop2];
    const report = prop1Value.concat(prop2Value);

    req.resources.report = report;
    next();
  };
}
