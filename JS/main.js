'use strict';

const pointerSec = document.querySelector(".sec_hand");
const pointerMin = document.querySelector(".min_hand");
const pointerHour = document.querySelector(".hour_hand");


setInterval(()=>{
    const date = new Date();
    let currSec = date.getSeconds();
    let currMin = date.getMinutes();
    let currHour = date.getHours() % 12;
    let currHourNow = date.getHours();

    console.log(currSec,currMin,currHour);
    pointerSec.style.transform = `rotate(${currSec * 6}deg)`
    pointerMin.style.transform = `rotate(${currMin * 6}deg)`
    pointerHour.style.transform = `rotate(${currHour * 30}deg)`
   
},1000)