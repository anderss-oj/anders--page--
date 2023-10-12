// function yellowCheck(element) {
//     const elementId= document.getElementById(element);
//     const elementBg= elementId.style.backgroundColor;
//     return elementBg;
// }

// yellowCheck(A1)

const audio1 = document.getElementById('audio1')
const audio2 = document.getElementById('audio2')
const audio3 = document.getElementById('audio3')
const audio4 = document.getElementById('audio4')
const audio5 = document.getElementById('audio5')
const audio6 = document.getElementById('audio6')
const audio7 = document.getElementById('audio7')
const audio8 = document.getElementById('audio8')
const audio9 = document.getElementById('audio9')
let audio1Active = false;
let audio2Active = false;
let audio3Active = false;
let audio4Active = false;
let audio5Active = false;
let audio6Active = false;
let audio7Active = false;
let audio8Active = false;
let audio9Active = false;

const range1 = {minWidth: 600, maxWidth: 800, minHeight: 600, maxHeight: 800};
const range2 = {minWidth: 740, maxWidth: 890, minHeight: 600, maxHeight: 1000};
const range3 = {minWidth: 680, maxWidth: 932, minHeight: 712, maxHeight: 862};
const range4 = {minWidth: 1200, maxWidth: 1550, minHeight: 803, maxHeight: 1050};
const range5 = {minWidth: 1362, maxWidth: 1485, minHeight: 810, maxHeight: 890};
const range6 = {minWidth: 946, maxWidth: 1030, minHeight: 886, maxHeight: 1033};
const range7 = {minWidth: 1406, maxWidth: 1592, minHeight: 786, maxHeight: 999};
const range8 = {minWidth: 1101, maxWidth: 1265, minHeight: 698, maxHeight: 1060};
const range9 = {minWidth: 1500, maxWidth: 1800, minHeight: 990, maxHeight: 1080};

function audioResize() {
    // log window size everytime function is run
    console.log (window.innerWidth+' x '+window.innerHeight)
    // playing ranges for each sound
    playAudio(audio1, range1, audio1Active);
    playAudio(audio2, range2, audio2Active);
    playAudio(audio3, range3, audio3Active);
    playAudio(audio4, range4, audio4Active);
    playAudio(audio5, range5, audio5Active);
    playAudio(audio6, range6, audio6Active);
    playAudio(audio7, range7, audio7Active);
    playAudio(audio8, range8, audio8Active);
    playAudio(audio9, range9, audio9Active);
}

function playAudio(audio, range, audioActive) {
    // check window size everytime function is run
    const windowWidth = window.innerWidth;  
    const windowHeight = window.innerHeight;

    // check ranges
    if (rangeCheck(windowWidth, range.minWidth, range.maxWidth) && rangeCheck(windowHeight, range.minHeight, range.maxHeight)) {
        if (!audioActive) {
            audio.play();
            audioActive = true;
            console.log ('playing something now');
        }
        else {
            audio.pause();
            audioActive = false;
            // console.log ('paused '+audio+' now');
        }
    }
    else {
        audio.pause();
        audioActive = false;
    }
    
}

function rangeCheck(value, min, max) {
    console.log()
    return value >= min && value <= max;
}

window.addEventListener('resize', audioResize)

audioResize();