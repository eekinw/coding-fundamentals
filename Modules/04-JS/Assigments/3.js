let factorial = function(anyNumber) {
    
    let product = 1;

    for(i = 1; i <= anyNumber; i++) {
      product *= i; // product = 1 multiplied by the number i 
    }
    return product;
}



console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(1));