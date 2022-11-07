// takes two dates and return the number of days between the first and the second


// Step 1: turn the strings into a different format 
// Step 2: get the difference between the 2 dates
// Step 3: since default unit is in milliseconds, convert to days
// Step 4: return final value 


// Math.abs = returns the absolute value of a number


let getDays = (date1, date2) => {
    let newDate1 = Date.parse(date1);
    let newDate2 = Date.parse(date2);

    let difference = newDate2 - newDate1;
    const msToDays = 1000*60*60*24

    let daysDiff = Math.abs(difference/msToDays)
    return daysDiff;
}

console.log(getDays('June 14, 2019','June 20, 2019'))
console.log(getDays('December 29, 2018','January 1, 2019'))
console.log(getDays('July 20, 2019','July 30, 2019'))
