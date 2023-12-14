class Cronos {
    #houre;
    #minute;
    #second;
    #milisecond;

    constructor() {
        this.#houre = 0;
        this.#minute = 0;
        this.#second = 0;
        this.#milisecond = 0;
    }

    get houre() {
        return this.#houre;
    }

    set houre(houre) {
        this.#houre = houre;
    }

    get minute() {
        return this.#minute;
    }

    set minute(minute) {
        this.#minute = minute;
    }

    get second() {
        return this.#second;
    }

    set second(second) {
        this.#second = second;
    }

    get milisecond() {
        return this.#milisecond;
    }

    set milisecond(milisecond) {
        this.#milisecond = milisecond;
    }

    count() {
        //----------------------------------Seconds---------------------------------------------------------------//
        if (centiseconds_time < 99) {
            //autoincement value if this is less that 99
            centiseconds_time++;
            //update first digit if the time is less  that 10
            centiseconds_time = ((centiseconds_time < 10) ? '0' : '') + centiseconds_time;
            //display that result to the UI
            getCentiseconds.innerHTML = centiseconds_time;
        }

        if (centiseconds_time == 99) {
            centiseconds_time = -1;
        }

        if (centiseconds_time == 0) {
            //same as above
            seconds_time++;
            seconds_time = ((seconds_time < 10) ? '0' : '') + seconds_time;

            getSeconds.innerHTML = seconds_time;
        }

        //----------------------------------Minutes---------------------------------------------------------------//
        if (seconds_time == 59) {
            seconds_time = -1;
        }

        if ((seconds_time == 0) && (centiseconds_time == 0)) {
            minutes_time++;

            minutes_time = ((minutes_time < 10 ? '0' : '')) + minutes_time;

            getMinutes.innerHTML = minutes_time;
        }

        //----------------------------------Hours---------------------------------------------------------------//
        if (minutes_time == 59) {
            minutes_time = -1;
        }

        if ((centiseconds_time == 0) && (seconds_time == 0) && (minutes_time == 0)) {
            hours_time++;
            hours_time = ((hours_time < 10) ? '0' : '') + hours_time;
            getHours.innerHTML = hours_time;
        }
    }

    initialization() {
        timer = setInterval(this.count, 10);
    }

    stop() {
        let stop = clearInterval(timer);
    }
}

export default Cronos;