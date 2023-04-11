const LinearEquations = require("./LinearEquations/LinearEquations");
const MensurationEquations = require("./MensurationEquations/MensurationEquations");
const QuadraticEquations = require("./QuadraticEquations/QuadraticEquations");


class Math {
    constructor() {
        this.linearEquations = new LinearEquations();
        this.quadraticEquations = new QuadraticEquations();
        this.mensurationEquations = new MensurationEquations();
    }
}



module.exports = Math;