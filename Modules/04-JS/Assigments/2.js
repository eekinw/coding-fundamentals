
function calculateAge(date) {
    var formattedDate = date.split("/")



    var birthdateTimeStamp = new Date(formattedDate[2],formattedDate[1], formattedDate[0])
    // returns a date in year, month, days, hours, etc.....



    var currentDate = new Date().getTime();
    // Date().getTime() returns the number of milliseconds since 1 January 1970.


    var difference = currentDate - birthdateTimeStamp;
    //difference between the current date and the set date within the function


    var currentAge = Math.floor(difference/31557600000)
    // dividing by 1000*60*60*24*365.25
    return currentAge}
    

    console.log(calculateAge("20/7/2002"));