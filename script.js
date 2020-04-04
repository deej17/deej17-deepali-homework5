//To print the current date
var date = moment().format("MMMM Do YYYY");
$("#currentDay").text(date);

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

renderLastSaved();

function displayMessage(type, message) {
  alert(message);
}

function renderLastSaved() {
  var textbox1 = localStorage.getItem("textbox1");
  var textbox2 = localStorage.getItem("textbox2");
  var textbox3 = localStorage.getItem("textbox3");
  var textbox4 = localStorage.getItem("textbox4");
  var textbox5 = localStorage.getItem("textbox5");
  var textbox6 = localStorage.getItem("textbox6");
  var textbox7 = localStorage.getItem("textbox7");
  var textbox8 = localStorage.getItem("textbox8");
  var textbox9 = localStorage.getItem("textbox9");

  //   if (textbox1 === null) {
  //     return;
  //   }
  tbSpan1.value = textbox1;
  tbSpan2.value = textbox2;
  tbSpan3.value = textbox3;
  tbSpan4.value = textbox4;
  tbSpan5.value = textbox5;
  tbSpan6.value = textbox6;
  tbSpan7.value = textbox7;
  tbSpan8.value = textbox8;
  tbSpan9.value = textbox9;
}
//Save Button 1
save1.addEventListener("click", function(event) {
  event.preventDefault();
  var textbox1 = document.querySelector("#textbox1").value;
  localStorage.setItem("textbox1", textbox1);
  if (textbox1 === "") {
    displayMessage("error", "The blank value is saved!");
  } else {
    displayMessage("success", "Saved successfully!");
  }
  renderLastSaved();
});

//Save Button 2
save2.addEventListener("click", function(event) {
  event.preventDefault();
  var textbox2 = document.querySelector("#textbox2").value;
  localStorage.setItem("textbox2", textbox2);
  if (textbox2 === "") {
    displayMessage("error", "The blank value is saved!");
  } else {
    displayMessage("success", "Saved successfully!");
  }
  renderLastSaved();
});

//Save Button 3
save3.addEventListener("click", function(event) {
  event.preventDefault();
  var textbox3 = document.querySelector("#textbox3").value;
  localStorage.setItem("textbox3", textbox3);
  if (textbox3 === "") {
    displayMessage("error", "The blank value is saved!");
  } else {
    displayMessage("success", "Saved successfully!");
  }
  renderLastSaved();
});
//Save Button 4
save4.addEventListener("click", function(event) {
  event.preventDefault();
  var textbox4 = document.querySelector("#textbox4").value;
  localStorage.setItem("textbox4", textbox4);
  if (textbox4 === "") {
    displayMessage("error", "The blank value is saved!");
  } else {
    displayMessage("success", "Saved successfully!");
  }
  renderLastSaved();
});
//Save Button 5
save5.addEventListener("click", function(event) {
  event.preventDefault();
  var textbox5 = document.querySelector("#textbox5").value;
  localStorage.setItem("textbox5", textbox5);
  if (textbox5 === "") {
    displayMessage("error", "The blank value is saved!");
  } else {
    displayMessage("success", "Saved successfully!");
  }
  renderLastSaved();
});

//Save Button 6
save6.addEventListener("click", function(event) {
  event.preventDefault();
  var textbox6 = document.querySelector("#textbox6").value;
  localStorage.setItem("textbox6", textbox6);
  if (textbox6 === "") {
    displayMessage("error", "The blank value is saved!");
  } else {
    displayMessage("success", "Saved successfully!");
  }
  renderLastSaved();
});
//Save Button 7
save7.addEventListener("click", function(event) {
  event.preventDefault();
  var textbox7 = document.querySelector("#textbox7").value;
  localStorage.setItem("textbox7", textbox7);
  if (textbox7 === "") {
    displayMessage("error", "The blank value is saved!");
  } else {
    displayMessage("success", "Saved successfully!");
  }
  renderLastSaved();
});

//Save Button 8
save8.addEventListener("click", function(event) {
  event.preventDefault();
  var textbox8 = document.querySelector("#textbox1").value;
  localStorage.setItem("textbox8", textbox8);
  if (textbox8 === "") {
    displayMessage("error", "The blank value is saved!");
  } else {
    displayMessage("success", "Saved successfully!");
  }
  renderLastSaved();
});

//Save Button 9
save9.addEventListener("click", function(event) {
  event.preventDefault();
  var textbox9 = document.querySelector("#textbox9").value;
  localStorage.setItem("textbox9", textbox9);
  if (textbox9 === "") {
    displayMessage("error", "The blank value is saved!");
  } else {
    displayMessage("success", "Saved successfully!");
  }
  renderLastSaved();
});
