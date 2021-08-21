let hoursHand = document.querySelector(".hour-hand");
let minsHand = document.querySelector(".min-hand");
let secsHand = document.querySelector(".second-hand");

window.onload = timer

setInterval(timer, 1000)

function timer(){
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let rotateHoursDegs = 90 + (360 / 12) * hours;
    hoursHand.style.transform = `rotate(${rotateHoursDegs}deg)`
    let rotateMinsDegs = 90 + (360 / 60) * mins;
    minsHand.style.transform = `rotate(${rotateMinsDegs}deg)`
    let rotateSecsDegs = 90 + (360 / 60) * secs;
    secsHand.style.transform = `rotate(${rotateSecsDegs}deg)`
    console.log(rotateHoursDegs)
    console.log(rotateMinsDegs)
    console.log(rotateSecsDegs)
}