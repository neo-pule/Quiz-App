import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-cat3',
  templateUrl: './cat3.page.html',
  styleUrls: ['./cat3.page.scss'],
})
export class Cat3Page implements OnInit {
  pp2;
  pp1;
  pp;
  ans1 :string;
  ans2 :string;
  ans3 :string;
  ans4 :string;
  ans5 :string;
  ans6 :string;
  ans7 :string;
  ans8 :string;
  ans9 :string;
  ans10 :string;
  ans11 :string;
  ans12 :string;
  ans13 :string;
  ans14 :string;
  ans15 :string;

  timeInSeconds
  time
  runTimer
  hasStarted
  hasFinished
  remainingTime


  displayTime
  constructor(private rout:Router, private routes : ActivatedRoute) { }
  getInfo(){
    this.pp2 = parseFloat(this.displayTime);
      console.log(this.pp2);
    // this.rout.navigateByUrl('home/result');
    this.rout.navigate(['home/result'], {queryParams: {ans1: this.ans1 , 
      ans2: this.ans2, ans3: this.ans3, ans4: this.ans4, ans5: this.ans5,ans6: this.ans6 , 
      ans7: this.ans7, ans8: this.ans8, ans9: this.ans9, ans10: this.ans10,ans11: this.ans11 , 
      ans12: this.ans12, ans13: this.ans13, ans14: this.ans14, ans15: this.ans15,pp2:this.pp2,pp1:this.pp1,pp: this.pp}});
  }
  ngOnInit() {
    this.routes.queryParams.subscribe(data => {
      console.log(data)

      this.initTimer();
 this. startTimer();

      this.displayTime = data.displayTime
      console.log(this.displayTime),

      this.ans1 = data.ans1
      console.log(this.ans1),
      this.ans2 = data.ans2
      console.log(this.ans2),
      this.ans3 = data.ans3
      console.log(this.ans3),
      this.ans4 = data.ans4
      console.log(this.ans4),
      this.ans5 = data.ans5
      console.log(this.ans5)
      this.ans6 = data.ans6
      console.log(this.ans6),
      this.ans7 = data.ans7
      console.log(this.ans7),
      this.ans8 = data.ans8
      console.log(this.ans8),
      this.ans9 = data.ans9
      console.log(this.ans9),
      this.ans10 = data.ans10
      console.log(this.ans10)
      this.ans11 = data.ans11
      console.log(this.ans11),
      this.ans12 = data.ans12
      console.log(this.ans12),
      this.ans13 = data.ans13
      console.log(this.ans13),
      this.ans14 = data.ans14
      console.log(this.ans14),
      this.ans15 = data.ans15
      console.log(this.ans15)

  });
  }
initTimer() {
  // Pomodoro is usually for 25 minutes
 if (!this.timeInSeconds) {
   this.timeInSeconds = 0;
 }
 this.time = this.timeInSeconds;
 this.runTimer = false;
 this.hasStarted = false;
 this.hasFinished = false;
 this.remainingTime = this.timeInSeconds;
 this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
 }

 startTimer() {
  this.runTimer = true;
 this.hasStarted = true;
 this.timerTick();
 }

 pauseTimer() {
 this.runTimer = false;
 }

 resumeTimer() {
 this.startTimer();
 }

 timerTick() {
 setTimeout(() => {
   if (!this.runTimer) { return; }
   this.remainingTime++;
   this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
   if (this.remainingTime > 0) {
     this.timerTick();
   }
   else {
     this.hasFinished = true;
   }
 }, 1000);
 }
 getSecondsAsDigitalClock(inputSeconds: number) {
 var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
 var hours = Math.floor(sec_num / 3600);
 var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
 var seconds = sec_num - (hours * 3600) - (minutes * 60);
 var hoursString = '';
 var minutesString = '';
 var secondsString = '';
 hoursString = (hours < 10) ? "0" + hours : hours.toString();
 minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
 secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
 return hoursString + ':' + minutesString + ':' + secondsString;
 }
}
