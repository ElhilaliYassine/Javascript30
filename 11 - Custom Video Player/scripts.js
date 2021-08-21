const playButton = document.querySelector('.player__button')
const video = document.querySelector('video')
const jumpForward = document.querySelector('.player__button[data-skip="25"]')
const jumpBackward = document.querySelector('.player__button[data-skip="-10"]')
const speed = document.querySelector('.player__slider[name="playbackRate"]')
const volume = document.querySelector('.player__slider[name="volume"]')

jumpForward.addEventListener('click', handleJumpForward)
jumpBackward.addEventListener('click', handleJumpBackward)
playButton.addEventListener('click', handlePlay)
speed.addEventListener('input', handleSpeed)
volume.addEventListener('input', handleVolume)

setInterval(handleProgress, 1000)

function handleProgress(){
    const bar = document.querySelector('.progress__filled')
    //bar.style.setProperty('width' ,(video.currentTime / video.duration) * 100 + "%")
    bar.style.setProperty('flex-basis' ,(video.currentTime / video.duration) * 100 + "%")
}

function handlePlay(){
    if(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)
        video.pause()
    else
        video.play()
}

function handleJumpForward(){
    video.currentTime += 25
    handleProgress()
}

function handleJumpBackward(){
    video.currentTime -= 10
    handleProgress()
}

function handleSpeed(){
    const bar = document.querySelector('body > div.player > div > input:nth-child(4)')
    video.playbackRate = bar.value
}

function handleVolume(){
    const bar = document.querySelector('body > div.player > div > input:nth-child(3)')
    video.volume = bar.value
}
