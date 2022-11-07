// tiles 1 to 6
// Create a function that takes my position A and my friend's position B 
// return a boolean of whether its possible to earn a bonus on any dice roll
// if already on the same tile, return false

// step 1: to let 'A' move such that i => i + 1, i +2 .......i + 6
// step 2: equate i + n to see if its => 'B'
// For example: if (a,b) = (3,7), 'a' may take on values 4, 5, 6, 7, 8, 9. Since 7 = the current value of 'B' => BONUS! 
// If in any point of time its possible that a === b, return true, else return false



let possibleBonus = (num1, num2) => {
     let final1 = num1;

    if(num1 === num2) {
        return false
     }

    for(let i = 1; i <= 6; i++) {
        final1 += 1;
        if(final1 === num2) {
            return true;
        } 
    } 
    return false;
}

console.log(possibleBonus(3,7))
console.log(possibleBonus(1,9))
console.log(possibleBonus(3,3))
console.log(possibleBonus(5,3))