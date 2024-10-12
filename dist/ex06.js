"use strict";
// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.
function addValues(values) {
    //   console.log(typeof values);
    const rst = values.reduce((acc, cur) => {
        if (typeof cur === "number")
            return acc + cur;
        return acc + cur;
    }, 0);
    if (typeof rst === "string")
        console.log(rst.slice(1, rst.length));
    else
        console.log(rst);
}
// Expected output:
addValues([1, 2, 3]); // 6
addValues(["Hello", " ", "World"]); // "Hello World"
