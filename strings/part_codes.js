"use strict";

// Function to extract supplier from the part code
function getSupplier(code) {
    return code.substring(0, code.indexOf(":")).trim();
}

// Function to extract product number from the part code
function getProductNumber(code) {
    return code.substring(code.indexOf(":") + 1, code.indexOf("-")).trim();
}

// Function to extract size from the part code
function getSize(code) {
    return code.substring(code.indexOf("-") + 1).trim();
}

// Part codes
let part1 = "ACME: 123-L";
let part2 = "DI : 12345-M";
let part3 = "ACE: 1-12";

// Display results
console.log(`${part1}          the large (${getSize(part1)}) part ${getProductNumber(part1)} is supplied by ${getSupplier(part1)}`);
console.log(`${part2}           the medium (${getSize(part2)}) part ${getProductNumber(part2)} is supplied by ${getSupplier(part2)}`);
console.log(`${part3}                  the size ${getSize(part3)} part ${getProductNumber(part3)} is supplied by ${getSupplier(part3)}`);
