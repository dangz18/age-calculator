//waiting for the DOM to be ready
$(document).ready(function () {
  //when the arrow button is clicked
  $("#arrow-btn").on("click", function () {
    resetAge();

    //get the day, month and year
    var dayField = $("#day-field").val();
    var monthField = $("#month-field").val();
    var yearField = $("#year-field").val();

    var currentDay = new Date().getDate();
    var currentMonth = new Date().getMonth();
    var currentYear = new Date().getFullYear();

    var userBirthdate = new Date(yearField, monthField - 1, dayField);
    var currentDate = new Date(currentYear, currentMonth, currentDay);

    //to compare dates
    var userTime = userBirthdate.getTime();
    var currentTime = currentDate.getTime();

    var checkDay = false;
    var checkMonth = false;
    var checkYear = false;

    //check the error in the fields
    if (dayField != "") {
      if (dayField <= 31 && dayField > 0) {
        checkDay = true;
      } else {
        $("#day-error").text("Must be a valid day");
        $("#day-error").css("display", "block");
        $("#day").css("color", "hsl(0, 100%, 67%)");
        $("#month").css("color", "hsl(0, 100%, 67%)");
        $("#year").css("color", "hsl(0, 100%, 67%)");
      }
    } else {
      $("#day-error").text("This field is required");
      $("#day-error").css("display", "block");
      $("#day").css("color", "hsl(0, 100%, 67%)");
      $("#month").css("color", "hsl(0, 100%, 67%)");
      $("#year").css("color", "hsl(0, 100%, 67%)");
    }

    if (monthField != "") {
      if (monthField <= 12 && monthField > 0) {
        checkMonth = true;
      } else {
        $("#month-error").text("Must be a valid month");
        $("#month-error").css("display", "block");
        $("#day").css("color", "hsl(0, 100%, 67%)");
        $("#month").css("color", "hsl(0, 100%, 67%)");
        $("#year").css("color", "hsl(0, 100%, 67%)");
      }
    } else {
      $("#month-error").text("This field is required");
      $("#month-error").css("display", "block");
      $("#day").css("color", "hsl(0, 100%, 67%)");
      $("#month").css("color", "hsl(0, 100%, 67%)");
      $("#year").css("color", "hsl(0, 100%, 67%)");
    }

    if (yearField !== "") {
      if (userTime <= currentTime) {
        checkYear = true;
      } else {
        $("#year-error").text("Must be in the past");
        $("#year-error").css("display", "block");
        $("#day").css("color", "hsl(0, 100%, 67%)");
        $("#month").css("color", "hsl(0, 100%, 67%)");
        $("#year").css("color", "hsl(0, 100%, 67%)");
      }
    } else {
      $("#year-error").text("This field is required");
      $("#year-error").css("display", "block");
      $("#day").css("color", "hsl(0, 100%, 67%)");
      $("#month").css("color", "hsl(0, 100%, 67%)");
      $("#year").css("color", "hsl(0, 100%, 67%)");
    }

    //february has no more than 29 days
    if (monthField == 2 && dayField > 29) {
      checkDay = false;
      $("#day-error").text("Must be a valid day");
      $("#day-error").css("display", "block");
      $("#day").css("color", "hsl(0, 100%, 67%)");
      $("#month").css("color", "hsl(0, 100%, 67%)");
      $("#year").css("color", "hsl(0, 100%, 67%)");
    }

    //if all the restrictions are respected calculate the age
    if (checkDay && checkMonth && checkYear) {
      calculateAge(
        dayField,
        monthField,
        yearField,
        currentDay,
        currentMonth + 1,
        currentYear
      );
    }
  });

  function calculateAge(
    dayField,
    monthField,
    yearField,
    currentDay,
    currentMonth,
    currentYear
  ) {
    var bd = Number.parseFloat(dayField),
      bm = Number.parseFloat(monthField),
      by = Number.parseFloat(yearField),
      td = Number.parseFloat(currentDay),
      tm = Number.parseFloat(currentMonth),
      ty = Number.parseFloat(currentYear);

    if (td < bd) {
      $("#age-days").text(td - bd + 30);
      tm = tm - 1;
    } else {
      $("#age-days").text(td - bd);
    }

    if (tm < bm) {
      $("#age-months").text(tm - bm + 12);
      ty = ty - 1;
    } else {
      $("#age-months").text(tm - bm);
    }

    $("#age-years").text(ty - by);
  }

  function resetAge() {
    //reset error messages
    $("#day-error").css("display", "none");
    $("#month-error").css("display", "none");
    $("#year-error").css("display", "none");
    $("#day").css("color", "hsl(0, 1%, 44%)");
    $("#month").css("color", "hsl(0, 1%, 44%)");
    $("#year").css("color", "hsl(0, 1%, 44%)");
    //reset age
    $("#age-days").text("--");
    $("#age-months").text("--");
    $("#age-years").text("--");
  }
});
