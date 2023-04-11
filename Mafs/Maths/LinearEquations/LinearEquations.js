class LinearEquations {
    slopeInterceptToGeneral(m, b) {
        const A = m * -1;
        const B = 1;
        const C = b * -1;
        return `${A}x + ${B}y + ${C} = 0`;
    }

    slopeInterceptToPointSlope(m, b, x1, y1) {
        const y = m * (x1 * -1) + b;
        return `y - ${y1} = ${m}(x - ${x1})`;
    }

    slopeInterceptToStandard(m, b) {
        const A = m * -1;
        const B = 1;
        const C = b * -1;
        return `${A}x + ${B}y = ${C}`;
    }

    slopeInterceptToTwoPoint(m, b, x1, y1) {
        const x2 = 0;
        const y2 = m * (x2 - x1) + y1;
        return `(${y - y1})/(${y2 - y1}) = (x - ${x1})/(x2 - ${x1})`;
    }

    slopeInterceptToVertex(m, b) {
        const h = (m * -1) / 2;
        const k = b + (m * h);
        const a = m * -1;
        return `y = ${a}(x - ${h})^2 + ${k}`;
    }


}

module.exports = LinearEquations