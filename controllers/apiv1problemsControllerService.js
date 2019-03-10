'use strict'

module.exports.newProblem = function newProblem(req, res, next) {
  res.send({
    message: 'This is the mockup test controller for newProblem'
  });
};