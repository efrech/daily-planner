//selector
// var displayDescription = document.getElementById("description");
// var currentTime = document.getElementById("currentDay");
// var userInputs = [];

//Set clock with moment - the current day is displayed at the top of the calendar
var time = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(time);

//begins function using Jquery syntax
$(document).ready(function(){
//     //I click into a timeblock, enter an event, I click the save button for that timeblock
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        userInputs = JSON.parse(localStorage.getItem("userInputs"));
        //the text for that event is saved in local storage
        localStorage.setItem("userInputs", JSON.stringify([{"time": time, "value": value}]));
        ////show event on block the saved events persists
        $('.description').append("<textarea>" + userInputs + "</textarea>"); $("input[type=text], textara").val("");
    })






//each timeblock is color coded to indicate whether it is in the past, present, or future

 })