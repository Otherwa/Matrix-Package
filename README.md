# quick-mafs

## Installation

```
npm i @otherwa/quick-mafs --save
```

## Usage

```
const AdvMath = require('@otherwa/quick-mafs');
let math = new AdvMath();

console.log(math.linearEquations.slopeInterceptToGeneral(-2, 3))
// 2x + 1y + -3 = 0

console.log(math.mensurationEquations.circleArea(3));
//28.274333882308138

console.log(math.quadraticEquations.permutation(6, 2));
//30
```
