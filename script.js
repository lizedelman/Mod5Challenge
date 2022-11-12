//Issues:
//1. The colorcode for time period doesn't work - not being called??s

//Sets current day at top of page
var currentDay = dayjs().format("MMM D, YYYY");
$("#currentDay").text(currentDay);
var currentTime = dayjs().format("h:mm a");
$("#currentTime").text(currentTime);

// load html before js
$(document).ready(function () {
  //Get current time
  var currentTime = dayjs().format("H");
  console.log(currentTime);

  //color codes the time blocks
  var hourBlock = $(".row");

  hourBlock.each(function () {
    var rowTime = parseInt($(this).attr("id"));
    console.log(Math.floor(rowTime));

    if (currentTime > rowTime) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
      console.log($(this));
    } else if (currentTime < rowTime) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
      console.log($(this));
    } else {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
      console.log($(this));
    }
  });

  $(function () {
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
  });
});
