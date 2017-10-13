let dollarAmount = 1.25
const piggyBank = {
    quarters: 0,
    dimes: 0,
    nickles: 0,
    pennies: 0
}

dollarAmount = dollarAmount * 100;
// Your magic code here
let remainder = dollarAmount % 25;
piggyBank.quarters = (dollarAmount - remainder) / 25;
dollarAmount = dollarAmount - (piggyBank.quarters * 25);
remainder = dollarAmount % 10;
piggyBank.dimes = (dollarAmount - remainder) / 10;
dollarAmount = dollarAmount - (piggyBank.dimes * 10);
remainder = dollarAmount % 5;
piggyBank.nickles = (dollarAmount - remainder) / 5;
dollarAmount = dollarAmount - (piggyBank.nickles * 5);
piggyBank.pennies = dollarAmount.toFixed() / 1;




console.log(piggyBank)