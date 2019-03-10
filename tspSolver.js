var solver = require('node-tspsolver');

var costMatrix = [
    [10, 15, 1, 3, 4],
    [1, 59, 26, 2, 3],
    [1, 59, 2, 23, 53],
    [3, 2, 93, 15, 5],
    [4, 3, 5, 56, 19]
];
console.log(costMatrix);
var costMatrix2 = [];



console.log(costMatrix2);
async function asyncCall() {
    var beginHR = process.hrtime()
    var begin = beginHR[0] * 1000000 + beginHR[1] / 1000;
    console.log('solving');

    await solver.solveTsp(costMatrix, true, {})
        .then(function (result) {
            console.log(result); // result is an array of indices specifying the route.
        }); var endHR = process.hrtime()
    var end = endHR[0] * 1000000 + endHR[1] / 1000;
    var duration = (end - begin) / 1000;
    var roundedDuration = Math.round(duration * 1000) / 1000;

    console.log("time: " + roundedDuration);
}


asyncCall();

