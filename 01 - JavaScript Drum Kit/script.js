let keys = document.querySelectorAll(".key")
keys.forEach(element => element.addEventListener("transitionend", removeTransition))

window.addEventListener("keydown", play)

function play(e){
    let key = e.keyCode
    let audio = document.querySelector(`audio[data-key="${key}"]`)
    if(audio){
        audio.currentTime = 0
        audio.play()
        effect(key)
    } 
}

function effect(dataKey){
    let element = document.querySelector(`[data-key='${dataKey}']`)
    if(element)
        element.classList.add("playing")
}

function removeTransition(e){    
    if(e.propertyName != 'transform')
        return
    this.classList.remove("playing")
}
