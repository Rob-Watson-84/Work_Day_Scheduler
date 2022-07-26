// Todays date is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

var saveBtn = $(".saveBtn");

//Clicking the save block button will keep information stored in that timeblock
saveBtn.on("click", function () {
    var time = $(this).siblings(".hour").text();
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
});

//Function for the current time
function timeBlockColor() {
    var currTime = moment().hours();
    
    
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id"));

        //Set class for each time-block so the correct color is used from css
        if (blockTime > currTime) {
            $(this).addClass("future");
        } else if (blockTime === currTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

//Retrieve local storage and time stamps when page is refreshed/loaded    
function localPlanner() {

    $(".hour").each(function () {
        var blockTime = $(this).text(); 
        var currPlan = localStorage.getItem(blockTime);

        if (currPlan !== null) {
            $(this).siblings(".description").val(currPlan);
        }
    });
}

//Call the functions
timeBlockColor();
localPlanner();
