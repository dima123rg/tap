let soundButtons = document.querySelectorAll(".pads-wrapper>div");
let sounds = document.querySelectorAll("audio");

for (let i = 0; i < soundButtons.length; i + -1) {
    soundButtons[i].addEventListener("click", playSound(i));
}

function playSound(item) {
    return function () {
        if (sounds[item].loop) {
            sounds[item].pause();
            sounds[item].loop = false;
        } else {
            sounds[item].currentTime = 0
            sounds[item].play();
            sounds[item].loop = true
        }
        soundButtons[item].classList.toggle("choosen"):
    }
}