//To print the current date
var dateDisplay = moment().format("MMMM Do YYYY");
$("#currentDay").text(dateDisplay);

var d = new Date().getHours(); // for current time

//------------------------------------------------------------------------
var tbSpan1 = document.querySelector("#textbox1");
var tbSpan2 = document.querySelector("#textbox2");
var tbSpan3 = document.querySelector("#textbox3");
var tbSpan4 = document.querySelector("#textbox4");
var tbSpan5 = document.querySelector("#textbox5");
var tbSpan6 = document.querySelector("#textbox6");
var tbSpan7 = document.querySelector("#textbox7");
var tbSpan8 = document.querySelector("#textbox8");
var tbSpan9 = document.querySelector("#textbox9");

function initPage() {
  var tableRow = document.querySelectorAll(".clsTrow");
  var strText = "";
  var nIndex = 0;
  var nHour = 0;

  for (var i = 0; i < tableRow.length; i++) {
    nIndex = tableRow[i].id.substr(4, 1);
    nHour = tableRow[i].id.substr(6);
    strText += $("#trow") + nIndex + "-" + nHour + " ";

    if (nHour < d) {
      $("#trow" + nIndex + "-" + nHour).addClass("past");
      $("#textbox" + nIndex).attr("disabled", "disabled"); //past rows are disabled
      $("#save" + nIndex).addClass("disabled", true);
    } else if (nHour == d) {
      $("#trow" + nIndex + "-" + nHour).addClass("present"); //present and future are editable
    } else {
      $("#trow" + nIndex + "-" + nHour).addClass("future");
    }
  }
}

initPage();
renderLastSaved();

function displayMessage(type, message) {
  alert(message);
}

function renderLastSaved() {
  tbSpan1.value = localStorage.getItem("#textbox1");
  tbSpan2.value = localStorage.getItem("#textbox2");
  tbSpan3.value = localStorage.getItem("#textbox3");
  tbSpan4.value = localStorage.getItem("#textbox4");
  tbSpan5.value = localStorage.getItem("#textbox5");
  tbSpan6.value = localStorage.getItem("#textbox6");
  tbSpan7.value = localStorage.getItem("#textbox7");
  tbSpan8.value = localStorage.getItem("#textbox8");
  tbSpan9.value = localStorage.getItem("#textbox9");
}

function checkClick(textboxId) {
  var textboxVal = document.querySelector(textboxId).value;
  localStorage.setItem(textboxId, textboxVal);
  if (textboxVal === "") {
    displayMessage("error", "The blank value is saved!");
  } else {
    displayMessage("success", "Saved successfully!");
  }
}

//Save Button 1
save1.addEventListener("click", function (event) {
  event.preventDefault();
  checkClick("#textbox1");
  tbSpan1.value = localStorage.getItem("#textbox1");
});

//Save Button 2
save2.addEventListener("click", function (event) {
  event.preventDefault();
  checkClick("#textbox2");
  tbSpan2.value = localStorage.getItem("#textbox2");
});

//Save Button 3
save3.addEventListener("click", function (event) {
  event.preventDefault();
  checkClick("#textbox3");
  tbSpan3.value = localStorage.getItem("#textbox3");
});

//Save Button 4
save4.addEventListener("click", function (event) {
  event.preventDefault();
  checkClick("#textbox4");
  tbSpan4.value = localStorage.getItem("#textbox4");
});

//Save Button 5
save5.addEventListener("click", function (event) {
  event.preventDefault();
  checkClick("#textbox5");
  tbSpan5.value = localStorage.getItem("#textbox5");
});

//Save Button 6
save6.addEventListener("click", function (event) {
  event.preventDefault();
  checkClick("#textbox6");
  tbSpan6.value = localStorage.getItem("#textbox6");
});

//Save Button 7
save7.addEventListener("click", function (event) {
  event.preventDefault();
  checkClick("#textbox7");
  tbSpan7.value = localStorage.getItem("#textbox7");
});

//Save Button 8
save8.addEventListener("click", function (event) {
  event.preventDefault();
  checkClick("#textbox8");
  tbSpan8.value = localStorage.getItem("#textbox8");
});

//Save Button 9
save9.addEventListener("click", function (event) {
  event.preventDefault();
  checkClick("#textbox9");
  tbSpan9.value = localStorage.getItem("#textbox9");
});
