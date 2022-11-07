// Return the missing letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.



function missingLetter(str) {  
    let alphabet = ('abcdefghijklmnopqrstuvwxyz');
    let first = alphabet.indexOf(str[0]);
    let strIndex = 0;
    let missing;

   for(let i = first; i < str.length; i++) {
     if (str[strIndex] === alphabet[i]) {
        continue;
     } else {
        missing = alphabet[i];
     } 
   }
   return missing;

  }
  

  console.log(missingLetter('abd'));



  