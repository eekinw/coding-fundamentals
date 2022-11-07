// Given an array of integers, find the sum of all integers. 
// You can be assure that the array will only contain integers (both positive and negative).


let numbersArray = function(sum) {
   let total = 0; 
   for (let i = 0; i < sum.length; i++) {
    total += sum[i]; 
   }
   return total;
}



console.log(numbersArray([1, 2, 3, 4]));
console.log(numbersArray([-3, 5, 19, -6]));