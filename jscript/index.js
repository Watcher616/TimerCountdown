const daysD = document.getElementById('days')
const hoursD = document.getElementById('hours')
const minutesD = document.getElementById('minutes')
const secondsD = document.getElementById('seconds')
const setDate= document.getElementById('set-date')
const dateEl= document.getElementById('date-el')
const container= document.querySelector('.container')
let date



  

function countdown(){
const targetDate= new Date(date)
const currentDate = new Date

const totalSeconds = (targetDate-currentDate)/1000

const days = Math.floor(totalSeconds/3600/24);
const hours = Math.floor(totalSeconds/3600) % 24;
const  minutes = Math.floor(totalSeconds/60) % 60;
const seconds = Math.floor(totalSeconds)%60;

daysD.innerHTML= days
hoursD.innerHTML= formatTime(hours)
minutesD.innerHTML= formatTime(minutes)
secondsD.innerHTML= formatTime(seconds)

}

function formatTime(time){
   // return time < 10 ? (`0${time}`): time;  
    if(time<10){
        return `0${time}`

    }
    else {
        return time
    } 
}


setDate.addEventListener('click', function(){
    date=dateEl.value
   container.style.display ="flex"
    countdown()
})

 
countdown()

setInterval(countdown, 1000)

