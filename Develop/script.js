//Issues:
//1. The colorcode for time period doesn't work - not being called

var hourBlock = document.getElementById("#hourRows");
var currentDay = document.getElementById("#currentDay");
var currentTime = dayjs().format("h:mm:ss");

//Sets current day at top of page
var currentDay = dayjs().format("MMM D, YYYY");
$("#currentDay").text(currentDay);

// load html before js
$(document).ready(function () {
  $(
    function () {
      //Save button function
      $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".col-md-9").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
      });

      $("#8 .col-md-9").val(localStorage.getItem("8"));
      $("#9 .col-md-9").val(localStorage.getItem("9"));
      $("#10 .col-md-9").val(localStorage.getItem("10"));
      $("#11 .col-md-9").val(localStorage.getItem("11"));
      $("#12 .col-md-9").val(localStorage.getItem("12"));
      $("#13 .col-md-9").val(localStorage.getItem("13"));
      $("#14 .col-md-9").val(localStorage.getItem("14"));
      $("#15 .col-md-9").val(localStorage.getItem("15"));
    },

    //Should color code the hour blocks - NOT working
    function setHourBlockClass() {
      if (hourBlock < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (hourBlock === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    }
  );
});
