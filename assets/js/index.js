

//Display current day at the top of the calendar
$('#currentDay').text(dayjs().format('dddd, MMMM D YYYY'));

console.log("Connected!")
var hour = dayjs().hour()

$(function () {
    //Loops through working hours
    for (i = 9; i < 18; i++) {
        //if hour is equal to current working hour turn red
        if (hour === i) {
            $('#hour-' + i).children('textarea').addClass('present')
        }
        //if hour is equal to current working hour turn grey
        else if (hour > i) {
            $('#hour-' + i).children('textarea').addClass('past')
        }
        //else hour is less than current working hour turn green
        else {
            $('#hour-' + i).children('textarea').addClass('future')
        }
    }
});


//When save button is clicked
$('.saveBtn').on('click', function () {
    //Get the value of the textarea
    var text = $(this).siblings('textarea').val()
    //Get the hour associated with the button
    var hour = $(this).parent().attr('id')
    //Save the value in local storage with key of hour 
    localStorage.setItem(hour, text)
});

//When page is loaded
$(document).ready(function () {
 //Loop through hours
    for (i = 9; i < 18; i++) {
     //Get the value of the hour from local storage
        var text = localStorage.getItem('hour-' + i)
        //Set the value of the textarea to the value from local storage
        $('#hour-' + i).children('textarea').val(text)
    }
});