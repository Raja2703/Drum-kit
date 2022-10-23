// button press

var no_of_drumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < no_of_drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);
  });
}

// Key board press

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

// makesound function

function makeSound(key) {
  switch (key) {
    case "w":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "d":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(key);
      break;
  }
}
