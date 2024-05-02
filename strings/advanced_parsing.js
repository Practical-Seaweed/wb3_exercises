"use strict"

function parseAndDisplayName(name) {

    let fullName = name;
    let firstSpace = fullName.indexOf(" ");
    let message = `
            Name: ${fullName}`;

    if(firstSpace === -1){
        
        message += `
            Only name: ${fullName}
        `;


    }else{

        let lastSpace = fullName.lastIndexOf(" ");
        let firstName = fullName.substring(0, fullName.indexOf(" "));
        let middleName = "";
        let lastName = fullName.substring(lastSpace + 1);

        if(lastSpace === firstSpace){
            message += `
            First name: ${firstName}
            Last name: ${lastName}
            `
        }else{

            middleName = fullName.substring(firstSpace + 1, lastSpace + 1);
            message += `
            First name: ${firstName}
            Middle name: ${middleName}
            Last name: ${lastName}
            `

        }

    }


    return message;

}

console.log(parseAndDisplayName("Wilfredo Contreras"));
console.log(parseAndDisplayName("Cher"));
console.log(parseAndDisplayName("Brenda Kaye"));
console.log(parseAndDisplayName("Dana Lynn Wyatt"));