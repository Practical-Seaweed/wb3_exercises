"use strict"

// this is regulaar replacement
function replaceDtoA() {
    let message = "Our corporate offices are located in Dallas";
    let result = message.replace("Dallas", "Austin");

    console.log(result)
}

replaceDtoA();



// this is case-insensitive replacement.
function replaceDtoA() {
    let message = "Our corporate offices are located in Dallas";
    let result = message.replace(/DALLAS/i, "Austin");

    console.log(result)
}

replaceDtoA();