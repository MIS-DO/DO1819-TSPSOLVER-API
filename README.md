# TSPSOLVER-API

## Overview
This is a Travel Salesman Problem API for stress analysis and benchmarking. 

This server was scaffolded with [oas-wizard](https://github.com/pafmon/oas-wizard), [oas-tools](https://github.com/isa-group/oas-tools) and [oas-generator](https://github.com/isa-group/oas-generator); tspsolver algorithm is taken from [devfacet](https://github.com/saby1101/node-tspsolver).

There is a **on-line demo** deployment available at: https://do1819-tspsolver-api.herokuapp.com


### Running the API using docker

If you have docker, you can use it out of the box: `docker run -p 54321:80 -d favsol26/tspsolver-api` to run the container at port `54321`


### Running the API using node

To run the server, just use:

```
npm install 
npm start
```

Then, if running in localhost, you can check the swagger UI doc portal in: `http://localhost:3000/`

### Using the API

#### Stress request

In order to send a request, a GET can be used:

- `GET /api/v1/stress/250/10` would generate and solve a Travel Salesman problem with 250 routes (each of them with a random weight up to 10).

#### Travel Salesman Problem solving

In order to solve a given Travel Salesman Problem you should send a POST to `/api/v1/problems` endpoint: 

`POST /api/v1/problems`
```json
{
    "id": "TSProblem",
    "problem": {
        "matrizNxN": [
        [0, 0, 0, 0, 0],
        [0, 0, 6, 2, 3],
        [0, 5, 0, 3, 1],
        [0, 2, 9, 0, 5],
        [0, 3, 5, 5, 0]
      ]
    }
}
```
will get: 
```json
{
  "id": "TSProblem",
  "problem": {
    "matrizNxN": [
        [0, 0, 0, 0, 0],
        [0, 0, 6, 2, 3],
        [0, 5, 0, 3, 1],
        [0, 2, 9, 0, 5],
        [0, 3, 5, 5, 0]
    ]
 },
  "solution": {
    "routes": [
     0, 2, 4, 1, 3, 0
    ],
    "stats": {
      "solvingTime": "250.086ms"
    }
  }
}
```