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
    var currTime = moment().hours();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id"));

        //Set class for each time-block
        if (blockTime > currTime) {
            $(this).addClass("future");
        } else if (blockTime === currTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

//Handle local storage and time stamps when page is refreshed/loaded    


timeBlockColor();

