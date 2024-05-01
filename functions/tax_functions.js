"get strict"

// will accept gross pay and returns the SSC tax on that amount. Assume the tax rate is 6.2%
function getSocSecTax(grossPay) {

     let taxRate = 0.062;
     let withheldAmount = grossPay * taxRate;
     return withheldAmount;
}

console.log(getSocSecTax(170));

// it accepts a gross pay and returns the Medicare tax on that amount. Assume the tax rate is 1.45%
function getMedicareTax(grossPay) {

     let medicareTaxRate = 0.0145;
     let medicareTax = grossPay * medicareTaxRate;
     return medicareTax;

}

console.log(getMedicareTax(170).toFixed(2));

// it accepts a gross pay and withholding code and returns the federal tax withholding on that amount. Will need to use an if statement
function getFederalTax(grossPay, code) {

     let taxRate = 0;
     if (code === 0) {
          taxRate = 23 / 100;
     }
     else if (code === 1) {
          taxRate = 21 / 100;
     }
     else if (code === 2) {
          taxRate = 19.5 / 100;
     }
     else if (code === 3) {
          taxRate = 18.5 / 100;
     }
     else if (code >= 4) {
          taxRate = .18 - ((code - 4) * .005);
     }

     let withheldAmount = grossPay * taxRate;
     return withheldAmount;


}

let grossPay = 72963.59
let code = 0;

console.log("Federal Tax on $" + grossPay + " gross pay with a code of " + code + ": $" + getFederalTax(grossPay, code).toFixed(2));


