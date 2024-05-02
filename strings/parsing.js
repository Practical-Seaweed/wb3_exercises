"use strict"


function parseAndDisplayName(someName) {


    // create a variable to hold the first name
    let fullName = someName;
    // find the position of the first space
    let spacePositiion = fullName.indexOf(" ");

    // create variables for the first and last name

    // for the first name we start at position 0 and go to the space,
    // since it does not include the character in the last position, we get the first name
    let firstName = fullName.substring(0, spacePositiion);

    // if we start at the space position and do not supply and ending position, it
    // gives us the characters from space until the end.
    // since we dont want the space, we add to the starting to move us past the space
    let lastName = fullName.substring(spacePositiion + 1);

    // use console.log to display the information to the user in the console
    console.log(`
Name: ${fullName}
First name: ${firstName}
Last name: ${lastName}
`)

}


parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Austin");
parseAndDisplayName("Siddalee Grace");