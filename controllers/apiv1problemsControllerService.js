'use strict'
const tsp = require('../tspSolver');

module.exports.newProblem = function newProblem(req, res, next) {
  tsp.solver(req.problem.value.problem.matrizNxN, 0, 0);

  // console.log("122   => " + JSON.stringify(req) + "<== 221");
  res.send({
    message: 'This is the mockup test controller for newProblem'
  });
};