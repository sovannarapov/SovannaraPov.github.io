function dropdownMenu() {
  var dropClick = document.getElementById("dropdownClick");

  if (dropClick.className === "topnav") {
    dropClick.className +=
      " responsive"; /* Change topnav to topnav.responsive */
  } else {
    dropClick.className = "topnav";
  }
}

var pop = document.getElementById("openPop");
var pop2 = document.getElementById("openPop2");

function popUp() {
  pop.style.display = "block";
}

function exit() {
  pop.style.display = "none";
}

function popUp2() {
  pop2.style.display = "block";
}

function exit2() {
  pop2.style.display = "none";
}

function succeed() {
  alert("Congratulation! You've become CafeDev members");
}

function running() {
  alert("Please wait! I'm bringing you to our space ...");
}

function sorry() {
  alert("Our space is under the developing time! Please try again later!");
}
