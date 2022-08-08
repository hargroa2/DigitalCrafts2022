"use strict";
const returnTwelve = () => {
    return 12;
};
const arrayOfNums = (num1, num2) => {
    return [num1, num2];
};
const calcIncomeTax = (salary, state) => {
    //blank state is false, full state is true
    if (state) {
        const total = salary * 1.3;
        return total * 1.2;
    }
    if (salary > 120000)
        return salary * 1.3;
    return salary * 1.25;
};
