document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

var buttonList = document.querySelectorAll(".set button");
console.log(buttonList[0].className);

for (var i = 0; buttonList.length; i++) {
  document
    .querySelectorAll(".set button")
    [i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      console.log(this + " " + buttonInnerHTML);
      playSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
}

function playSound(buttonInnerHTML) {
  var audio;
  switch (buttonInnerHTML) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    default:
      console.log("Irrelevant Button");
  }

  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
