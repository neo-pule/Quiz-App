import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-cat1',
  templateUrl: './cat1.page.html',
  styleUrls: ['./cat1.page.scss'],
})
export class Cat1Page implements OnInit {
  results = 0;
  pp;
  @ViewChild('firstSlider') slider: ElementRef;
  ans1 :string = "";
  ans2 :string = "";
  ans3 :string = "";
  ans4 :string = "";
  ans5 :string = "";
  ans6 :string = "";
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
displayTime1
  constructor(private obj:Router, private addr : ActivatedRoute) { 
    
  }

  

  // isNotFirstSlide(): boolean {
  //   return this.slider && this.slider.nativeElement && this.slider.nativeElement.getActiveIndex() > 0;
  //   console.log(this.slider.nativeElement.getActiveIndex());
  // }

  // Next(){

  //   this.slider.getActiveIndex().then(
  //     (index)=>{
  //       this.pp = index;
  //    });
  //   // this.slide.slideNext();
  //  }
  
  getInfo(){
    // this.obj.navigateByUrl('/home/result');
    this.obj.navigate(['/home/cat2'], {queryParams: {displayTime1: this.displayTime1,ans1: this.ans1 , 
      ans2: this.ans2, ans3: this.ans3, ans4: this.ans4, ans5: this.ans5}});
      
      this.pp = parseFloat(this.displayTime1);
      console.log(this.pp);
      console.log(this.displayTime1);
  }

  submit(){
    console.log(this.results +=1);
    // this.Mark(this.myResult);
  }
  
  // getIndex(event) {
  //   console.log(event.clickedIndex);
  //   this.pp =event.clickedIndex;
  //   console.log(this.pp);
  // }

  // getIndex(){
  //   this.slides.getActiveIndex().then(
  //     (index)=>{
  //       this.pp = index;
  //    });
  //  }


  ngOnInit() {

    this.initTimer();
 this. startTimer();
 
    this.addr.queryParams.subscribe(data => {
      console.log(data)

      this.displayTime1 = data.displayTime1
      console.log(this.displayTime1),

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
   this.displayTime1 = this.displayTime;
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
