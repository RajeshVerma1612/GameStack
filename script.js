
// home 
const home =document.getElementById("home");
home.addEventListener("click",()=>{
    location.reload();
})
// audio section 

const playButton = document.getElementById("play_button");
const audio = document.getElementById("audio");
let isPlaying = false;
playButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        playButton.classList.replace("fa-volume-high", "fa-volume-xmark");
    } else {
        audio.play();
        isPlaying = true;
        playButton.classList.replace("fa-volume-xmark", "fa-volume-high");
    }
});
