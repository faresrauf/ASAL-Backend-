class CustomDate {
    constructor() {
        this.now = new Date();
        this.date = new Date();
        
        //Use constants to avoid 'magic numbers'
        this.daysOfTheWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        this.HoursInDay = 24;
        this.MinsInHour = 60;
        this.SecondsInMin = 60;
        this.msInSecond = 1000;
    }


    // update this.date object
    updateDate(newDate) {
        this.date = newDate;
    }


    // return yesterday's date
    yesterday() {
        const yesterday = new Date();
        yesterday.setDate(now.getDate() - 1);
        return yesterday;
    }


    // return yesterday's day
    yesterdayDay() {
        return this.daysOfTheWeek[(this.now.getDay() - 1) % 7];
    }


    // return tomorrow's date
    tomorrow() {
        const tomorrow = new Date();
        tomorrow.setDate(now.getDate() + 1);
        return tomorrow;
    }


    // return tomorrow's day
    tomorrowDay() {
        return this.daysOfTheWeek[(this.now.getDay() + 1) % 7];
    }


    // add minutes to this.date
    addMinutes(minutes) {
        this.date.setMinutes(this.date.getMinutes() + minutes);
    }


    // add hours to this.date
    addHours(hours) {
        this.date.setHours(this.date.getHours() + hours);
    }


    // add days to this.date
    addDays(days) {
        this.date.setDate(this.date.getDate() + days);
    }


    // Logs the current date-time
    current() {
        console.log(this.now);
    }


    // return boolean
    isFuture() {
        return this.now < this.date;
    }


    // Return (bigger, smaller or equal) between the given date and this.date
    compare(newDate) {
        if (newDate > this.date) {
            return 'Bigger';
        } else if (this.date) {
            return 'Smaller'
        } else {
            return 'Equal';
        }
    }


    // Return the difference between the given date and this.date in format (x Days, y hours, z minutes)
    differenceInDays(newDate) {
        const difference = Math.abs(this.date - newDate);

        const days = Math.floor(difference / (this.msInSecond * this.SecondsInMin * this.MinsInHour * this.HoursInDay));

        const hours = Math.floor((difference % (this.msInSecond * this.SecondsInMin * this.MinsInHour * this.HoursInDay)) /
            (this.msInSecond * this.SecondsInMin * this.MinsInHour));

        const minutes = Math.floor((difference % (this.msInSecond * this.SecondsInMin * this.MinsInHour)) /
            (this.msInSecond * this.SecondsInMin));

        return `${days} days, ${hours} hours, ${minutes} minutes`;
    }


    // Returns minutes in hours format, eg: convertMinutesToTextualHour(200) = 3 hour(s) and 20 minute(s)
    convertMinutesToTextualHour(minutes) {
        const hours = Math.floor(minutes / this.MinsInHour);
        const minutesRemain = minutes - (hours * this.MinsInHour);

        return `${hours} hour(s) and ${minutesRemain} minute(s)`;
    }


    // Returns the quarter (1 to 4) of the year for the given date, else use this.date
    getQuarter(newDate) {
        newDate = newDate ?? this.Date;
        return Math.floor(newDate.getMonth() / 3) + 1;
    }


    // Returns current day (three letters, Mon through Sun) for the given date, else use this.date
    shortDay(newDate) {
        return this.daysOfTheWeek[newDate.getDay()];
    }
}
