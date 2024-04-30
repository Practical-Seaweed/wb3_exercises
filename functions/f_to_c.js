"use strict"

function convertFtoC(someTemp){

    // setup variable for fahrenheit to celsius
    let fahrenheit = someTemp;
    let celsius = (fahrenheit - 32) * 5 / 9;

    // return the value of the calc as output from the function
    return celsius;
}

console.log("converting 212 from F to C: " + convertFtoC(212));
console.log("converting 99 from F to C: " + convertFtoC(90));
console.log("converting 72 from F to C: " + convertFtoC(72));
console.log("converting 32 from F to C: " + convertFtoC(32));
console.log("converting 0 from F to C: " + convertFtoC(0));
console.log("converting -40 from F to C: " + convertFtoC(-40));