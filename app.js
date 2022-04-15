'use strict';

// Declare needed variables

// Alert the user to choose from the following: 1. Deposit Money 2. Withdraw Money

// f the user chooses to Deposit Money, Ask the user “How much would you like to deposit?"
// Alert the user ". Your new balance is: [THE BALANCE]".
// If the user chooses to Withdraw Money, Ask the user "How much would you like to withdraw?"

// Alert the user ". Your new balance is: [THE BALANCE]"

// Create a running total for the Balance each time the user chooses to deposit or withdraw money
// If there is a positive balance,  alert the user with message "You got monnneeeyy!!"
// If there is a negative balance, alert the user with the message "Low Funds",
let bankAccount = 10;
let bankAccountMenu = confirm('How may we assist you today? Click OK for Deposit, Click Cancel for Withdraw Money', true);

if (bankAccountMenu) {
    var bankAccountDeposit = prompt("How much would you want to deposit?");
    alert(`Your new balance is: ${parseInt(bankAccountDeposit) + bankAccount}`)
    bankAccount = parseInt(bankAccountDeposit) + bankAccount;

    // console.log(bankAccount)
    if (bankAccount > 0) {
        alert("You got monnneeeyy!!");
    } else {
        alert("Low Funds");
    }

} else {
    var bankAccountWithdrawal = prompt("How much would you want to Withdrawal?");
    alert(`Your new balance is: ${parseInt(bankAccountWithdrawal) + bankAccount}`)
    bankAccount = parseInt(bankAccountWithdrawal) + bankAccount;

    // console.log(bankAccount)
    if (bankAccount > 0) {
        alert("You got monnneeeyy!!");
    } else {
        alert("Low Funds");
    }
}



