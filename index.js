const LinearEquations = require("./Mafs/Maths/LinearEquations/LinearEquations");
const MensurationEquations = require("./Mafs/Maths/MensurationEquations/MensurationEquations");
const QuadraticEquations = require("./Mafs/Maths/QuadraticEquations/QuadraticEquations");


class Math {
    constructor() {
        this.linearEquations = new LinearEquations();
        this.quadraticEquations = new QuadraticEquations();
        this.mensurationEquations = new MensurationEquations();
    }
}

module.exports =  Math;