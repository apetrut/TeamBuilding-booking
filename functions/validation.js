module.exports = {

    isCheckOutDateValid: function(checkInDateString, checkOutDateString)
    {
        //console.info('entered the validation function!');

        //console.log("Check-in date is: " + checkInDateString);
        //console.log("Check-out date is: " + checkOutDateString);

        var checkInDate = new Date(checkInDateString);
        var checkOutDate = new Date(checkOutDateString);
        
        //console.log('the year for check-in is:' +  checkInDate.getFullYear());
        //console.log('the year for check-out is:' +  checkOutDate.getFullYear());

        if (checkInDate.getFullYear() > '2018')
        {
            // the user didn't type the year, hence 2019 was automatically added.
            // in this case we need to reset the year to the current year.
            checkInDate.setFullYear(Date.CURRENT_YEAR);
        }
        
        if (checkOutDate.getFullYear() > '2018')
        {
            // the user didn't type the year, hence 2019 was automatically added.
            // in this case we need to reset the year to the current year.
            checkOutDate.setFullYear(Date.CURRENT_YEAR);
        }

        console.log("Check-in time is: " + checkInDate.getTime());
        console.log("Check-out time is: " + checkOutDate.getTime());

        var isDateValid = checkInDate.getTime() < checkOutDate.getTime();

        console.log('result is:' + isDateValid);

        return isDateValid;
    }
}