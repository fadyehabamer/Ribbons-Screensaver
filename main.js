let button = document.getElementById("button")
button.addEventListener("click",()=>{
    document.body.classList.toggle("light")
})

// pause / play the ribbons (moving content should be stoppable)
const pauseButton = document.getElementById("pause")
function setPaused(paused) {
    if (paused) {
        ribbons.pause()
    } else {
        ribbons.resume()
    }
    pauseButton.setAttribute("aria-label", paused ? "Play animation" : "Pause animation")
    pauseButton.querySelector("span").textContent = paused ? " ▶ " : " ⏸ "
}
pauseButton.addEventListener("click", () => {
    setPaused(!ribbons.isPaused())
})

// people who ask the OS to reduce motion get a few seconds of ribbons, then a still frame
if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setTimeout(() => setPaused(true), 3000)
}
