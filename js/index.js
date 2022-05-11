var numberOfDrumBtn = document.querySelectorAll(".drum").length


// Mouse clicked
for(var drumBtnCount = 0; drumBtnCount < numberOfDrumBtn; drumBtnCount++){
    document.querySelectorAll(".drum")[drumBtnCount].addEventListener("click", function(){
       
        var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    })
    
}


// Detecting key down
// addEventListener = add some event
document.addEventListener("keydown", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})


function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;                    
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;  
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;                    
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break; 

        default: console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeBtn = document.querySelector("." + currentKey)

    //Add class to html element
    activeBtn.classList.add("pressed")

    //Set time out for BTN animation after pressed the btn
    setTimeout(function() {
        activeBtn.classList.remove("pressed")
    }, 100)
}