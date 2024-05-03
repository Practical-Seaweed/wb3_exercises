"use strict"

console.log("I am working!");

window.onload = function (){

    
    // gets the button off the page so we can write some code that runs when it is called
    let theButton = document.querySelector("#theButton");

    theButton.addEventListener("click", displayTime);
}



function displayTime(){
    console.log("you clicked theButton");

    let theDate = document.querySelector("#theDate");
    let theParagraph = document.querySelector("#theParagraph");


    console.log(theDate.value);

    let generatedDate = new Date(theDate.value+"T00:00:00");

    theParagraph.innerHTML = generatedDate.toLocaleString();

}
