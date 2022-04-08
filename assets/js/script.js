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

//begins function using Jquery syntax
$(document).ready(function(){
    getEvents();
    colorUpdater();
//click into a timeblock, enter an event, I click the save button for that timeblock
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val()
        var parentId = $(this).parent().attr("id");
        //the text for that event is saved in local storage
        localStorage.setItem(parentId, value);
        $(this).value = localStorage.getItem(parentId);
    })
})

////show event on block the saved events persists
function getEvents (){
    $(".description").each(function(){
        var parentId = $(this).parent().attr("id");
        console.log(parentId);
        console.log(localStorage.getItem(parentId));
        $(this).val(localStorage.getItem(parentId));
    })

}

//each timeblock is color coded to indicate whether it is in the past, present, or future
function colorUpdater() {
    var currentHour = moment().format('H');
    $(".time-block").each(function(){
        if (currentHour == $(this).data('hour')) {
            $(this).addClass("present");
        }else if (currentHour < $(this).data('hour')) {
            $(this).addClass("future");
        }else{
            $(this).addClass("past");
        }
    })
    }
    