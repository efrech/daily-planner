//selector
var displayDescription = document.getElementsByClassName("description");
var timeBlock = document.getElementsByClassName("time-bock");

//Set clock with moment - the current day is displayed at the top of the calendar
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, HH:mm:ss'));
};

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});
// var time = moment().format("MMMM Do YYYY, HH:mm:ss");
// $("#currentDay").text(time);

//begins function using Jquery syntax
$(document).ready(function(){
    colorUpdater();
//     //I click into a timeblock, enter an event, I click the save button for that timeblock
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        //the text for that event is saved in local storage
        localStorage.setItem(time, value);
        ////show event on block the saved events persists
    })
})
//each timeblock is color coded to indicate whether it is in the past, present, or future
function colorUpdater() {
    var currentHour = moment().format('H');
    $(".time-block").each(function(){
        console.log($(this).data('hour'));
        if (currentHour == $(this).data('hour')) {
            $(this).addClass("present");
        }else if (currentHour < $(this).data('hour')) {
            $(this).addClass("future");
        }else{
            $(this).addClass("past");
        }
    })
    }
// });
    