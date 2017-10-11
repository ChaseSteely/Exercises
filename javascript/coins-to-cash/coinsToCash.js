const piggyBank = { 
    quarters: 5,
    dimes: 2,
    nickles: 5,
    pennies: 342 
}

let dollarAmount = 0;

console.log(Object.values(piggyBank))

for (let key in piggyBank) {
    if (piggyBank.hasOwnProperty(key)) {
        let element = piggyBank[key];
        console.log(element)
        
    }
}
dollarAmount += piggyBank.pennies/100
dollarAmount += piggyBank.quarters/4;
dollarAmount += piggyBank.dimes/10;
dollarAmount += piggyBank.nickles/20;

console.log('$' + dollarAmount.toFixed(2))


