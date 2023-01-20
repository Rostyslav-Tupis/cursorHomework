let audio1 = new Audio ('./audio/audio1.wav');
let audio2 = new Audio ('./audio/audio2.wav');
let audio3 = new Audio ('./audio/audio3.wav');
let audio4 = new Audio ('./audio/audio4.wav');
let audio5 = new Audio ('./audio/audio5.wav');
let audio6 = new Audio ('./audio/audio6.wav');
let audio7 = new Audio ('./audio/audio7.wav');

function playAudio(audio , id){
    audio.play();
    audio.currentTime = 0;
    document.querySelector(id).classList.add("active")
}
function sound (e){
    if(e.keyCode === 83){
        playAudio(audio1 , '#s')
    }
    if(e.keyCode === 68){
        playAudio(audio2 , "#d")
    }
    if(e.keyCode === 70){
        playAudio(audio3 , "#f")
    }
    if(e.keyCode === 71){
        playAudio(audio4 , "#g")
    }
    if(e.keyCode === 72){
        playAudio(audio5, "#h")
    }
    if(e.keyCode === 74){
        playAudio(audio6 , "#j")
    }
    if(e.keyCode === 75){
        playAudio(audio7 , "#k")
    }
};
function deleteTransition(e){
    if(e.propertyName !== "scale")return; // якщо scale відсутній , пропускаємо
    this.classList.remove('active')// якщо scale існує тоді видаляємо клас active
}
let keys = document.querySelectorAll(".key");
keys.forEach((key) =>{
    key.addEventListener("transitionend" , deleteTransition)
})

window.addEventListener('keydown' ,sound);