setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    //setRotation(secondHand, secondsRatio)
    //setRotation(minuteHand, minutesRatio)
    //setRotation(hourHand, hoursRatio)

    secondHand.style.setProperty('--rotation', secondsRatio * 360)
    minuteHand.style.setProperty('--rotation', minutesRatio * 360)
    hourHand.style.setProperty('--rotation', hoursRatio * 360)
}

function setRotation(element, setRotation){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

