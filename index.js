var numberOfDrumButtons = document.querySelectorAll(".drum").length;


// Detecting Button Press
for (var i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}


// Detecting Keyboard Press
document.addEventListener("keypress",   function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

})


function makeSound(key) {

    if (key === "w") {
        var tom1 = new Audio("C:/Users/Admin/Documents/Programs/Web Programs/Drum Kit/sounds/tom-1.mp3");
        tom1.play();
    }
    else if (key === "a") {
        var tom2 = new Audio("C:/Users/Admin/Documents/Programs/Web Programs/Drum Kit/sounds/tom-2.mp3");
        tom2.play();
    }
    else if (key === "s") {
        var tom3 = new Audio("C:/Users/Admin/Documents/Programs/Web Programs/Drum Kit/sounds/tom-3.mp3");
        tom3.play();
    }
    else if (key === "d") {
        var tom4= new Audio("C:/Users/Admin/Documents/Programs/Web Programs/Drum Kit/sounds/tom-4.mp3");
        tom4.play();
    }
    else if (key === "j") {
        var snare = new Audio("C:/Users/Admin/Documents/Programs/Web Programs/Drum Kit/sounds/snare.mp3");
        snare.play();
    }
    else if (key === "k") {
        var crash = new Audio("C:/Users/Admin/Documents/Programs/Web Programs/Drum Kit/sounds/crash.mp3");
        crash.play();
    }
    else if (key === "l") {
        var kickBass = new Audio("C:/Users/Admin/Documents/Programs/Web Programs/Drum Kit/sounds/kick-bass.mp3");
        kickBass.play();
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}