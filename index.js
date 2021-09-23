setInterval(() => {

    date = new Date();
    hoursTime = date.getHours();
    minutesTime = date.getMinutes();
    secondsTime = date.getSeconds();
    hoursRotation = 30 * hoursTime + minutesTime / 2;
    minutesRotation = 6 * minutesTime;
    secondsRotation = 6 * secondsTime;
    hourContainer.style.transform = 'rotate(' + hoursRotation + 'deg)';
    minuteContainer.style.transform = 'rotate(' + minutesRotation + 'deg)';
    secondContainer.style.transform = 'rotate(' + secondsRotation + 'deg)';
}, 1000);