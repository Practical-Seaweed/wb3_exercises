"use strict"

function displayMailingLabel(name, address, city, state, zip){
            
    console.log(name);
    console.log(address);
    console.log(`${city}, ${state} ${zip}`);

// this is how you would do this with string concatenation
//    console.log(city + "," + state + " " + zip);

}

function addNumbers(num1, num2){

    const sum = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + sum);

}

function displayReceipt (totalDue, amountPaid){
    const changeDue = amountPaid - totalDue;
    const amountPaidLess = totalDue - amountPaid;

    console.log("Total Due: $" + totalDue.toFixed(2));
    console.log("Amount Paid: $" + amountPaid.toFixed(2));
    console.log("Change Due: $" + changeDue.toFixed(2));
    if (amountPaid < totalDue){
        console.log( "Amount left to be paid: $" + amountPaidLess);

    }

}


// use the above functions
displayMailingLabel("will", "1234 Easy Street", "Irving", "TX", 75060);
displayMailingLabel("will numero 2", "4321 Easy Street", "Irving", "TX", 75060);
addNumbers(10,15);
addNumbers(25, 45)
displayReceipt(45, 100);
displayReceipt(15,15);
displayReceipt(30, 20);
