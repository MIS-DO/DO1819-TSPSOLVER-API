var solver = require('node-tspsolver');
var matriz = [];
// var rutas = 5;
// var max = 90;

// var matriz = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 6, 2, 3],
//     [0, 5, 0, 3, 1],
//     [0, 2, 9, 0, 5],
//     [0, 3, 5, 5, 0]
// ];
// console.log(costMatrix);

function creaMatriz(n, m, max) {
    var matrizInterna = [];

    for (let index = 0; index < m; index++)
        matrizInterna.push(
            Math.ceil(
                (Math.random() * max + 1) - 1
            )
        );

    if (n < 1) {
        return matriz = [];
    } else {
        creaMatriz(n - 1, m, max)
        matriz.push(matrizInterna);
    }
    return matriz;
};

async function asyncCall(matriz, rutas, max) {

    console.log(creaMatriz(rutas, rutas, max));

    var beginHR = process.hrtime()
    var begin = beginHR[0] * 1000000 + beginHR[1] / 1000;
    console.log('solving'); 

    matriz = (rutas > 0) ? creaMatriz(rutas, rutas, max) : matriz;

    await solver.solveTsp(matriz, true, {})
        .then(function (result) {
            console.log(result); // result is an array of indices specifying the route.
        });

    var endHR = process.hrtime()
    var end = endHR[0] * 1000000 + endHR[1] / 1000;
    var duration = (end - begin) / 1000;
    var roundedDuration = Math.round(duration * 1000) / 1000;

    console.log("time: " + roundedDuration);
}

// asyncCall([], 4, 15);

module.exports.solver = asyncCall;