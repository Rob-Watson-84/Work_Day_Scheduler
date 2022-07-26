// Todays date is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

var saveBtn = $(".saveBtn");

//Clicking the save block button will keep information stored in that timeblock
saveBtn.on("click", function () {
    var time = $(this).siblings(".hour").text();
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
});

// Need to add color to indicate whether it is in the past, present, or future
function timeBlockColor() {
    var currTime
}

//Handle local storage and time stamps when page is refreshed/loaded    


timeBlockColor();

