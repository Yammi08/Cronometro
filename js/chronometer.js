class Chronometer
{
    constructor()
    {
        this.on = false;
        this.start();
    }
    start()
    {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.miliseconds = 0;
        console.log("Start")
    }
    chronometeroff()
    {
        this.on = false;
        console.log("Off")
    }
    chronometeron()
    {
        this.on = true;
        console.log("On")
    }
    update() 
    {
        if(this.on)
        {
            this.miliseconds+=1;
            this.seconds = Math.floor(this.miliseconds/100);
            this.minutes = Math.floor(this.seconds/60);
            this.hours = Math.floor(this.minutes/60);
    

        }
        let milsec = ('0' + (this.miliseconds%100)).slice(-2);
        let sec = ('0' + (this.seconds%60)).slice(-2);
        let min = ('0' + (this.minutes%60)).slice(-2);
        let hr  = ('0' + this.hours).slice(-2);
        document.getElementById("h1-chronometer").innerHTML = hr + ":" + min + ":" + sec + ":" + milsec;
    }
}
var chronometer = new Chronometer();

window.setInterval(function(){chronometer.update()},10)