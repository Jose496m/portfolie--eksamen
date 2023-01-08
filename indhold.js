
const vdecontainer = document.querySelector(".videoplayer");
const vde = document.querySelector(".videoplayer video");
const btnn = document.querySelector(".video-playerbutton");

function togglePlay() {
    if (vde.paused) {
        vde.play()
        btnn.textContent = "Pause"
        btnn.classList.add("playing")
    } else {
        vde.pause()
        btnn.textContent = "Afspil"
        btnn.classList.remove("playing")
    }

}

function videoEnded() {
    btnn.textContent = "Afspil"

    
}

btnn.addEventListener("click", togglePlay);
vde.addEventListener("ended", videoEnded);

