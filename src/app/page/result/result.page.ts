import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  @Input() ans1 
  @Input() ans2 
  @Input() ans3 
  @Input() ans4 
  @Input() ans5 
  @Input() ans6 
  @Input() ans7 
  @Input() ans8 
  @Input() ans9
  @Input() ans10 
  @Input() ans11 
  @Input() ans12 
  @Input() ans13 
  @Input() ans14 
  @Input() ans15 
  @Input() pp1
  @Input() pp2 
  @Input() pp
  total;
  status : string ="";
  progress;
  progress1;
  constructor( private addr:ActivatedRoute) { this.total=0;
     }



  Submit(){
  if(this.ans1 == "If the road is clear of traffic for a short distance"){

     this.total +=1;
    // this.total= this.total +1;
    
  }else{
    this.total=this.total;
  }
  
  
  if(this.ans2 == "With a tow-bar"){
    this.total +=1;
    // this.total= this.total +1;
  }
  
  if(this.ans3 == "60Km"){
    this.total +=1;
    // this.total= this.total +1;
  }
  
  if(this.ans4 == "Give right of way to the emergency vehicle"){
    this.total +=1;
    // this.total= this.total +1;
  }
  
  if(this.ans5 == "The vehicle in front of you wants to turn right and the road is wide enough to pass on the left-hand side"){
    this.total +=1;
    // this.total= this.total +1;
  }
  
  if(this.ans6 == "Big Five Animals"){

    this.total= this.total +1;
  }
  
  if(this.ans7 == "Springbok"){

    this.total= this.total +1;
  }
  
  if(this.ans8 == "5"){

    this.total= this.total +1;
  }
  
  if(this.ans9 == "OR Tambo International Airport"){

    this.total= this.total +1;
  }
  
  if(this.ans10 == "4"){

    this.total= this.total +1;
  }
  
  if(this.ans11 == "Zambia and Zimbabwe"){

    this.total= this.total +1;
  }
  
  if(this.ans12 == "54"){

    this.total= this.total +1;
  }
  
  if(this.ans13 == "Algeria"){

    this.total= this.total +1;
  }
  
  if(this.ans14 == "Equatorial Guinea"){

    this.total= this.total +1;
  }

  if(this.ans15 == "Gambia"){

    this.total= this.total +1;
  }

this.progress = this.total / 15;
this.progress1 = this.progress *100;
  }
  ngOnInit() {

    this.addr.queryParams.subscribe(data => {
      console.log(data)

      
      this.pp = data.pp
      console.log(this.pp)

      this.pp1 = data.pp1
      console.log(this.pp1)

      this.pp2 = data.pp2
      console.log(this.pp2)

    
      this.ans1 = data.ans1
      console.log(this.ans1)
      this.ans2 = data.ans2
      console.log(this.ans2)
      this.ans3 = data.ans3
      console.log(this.ans3)
      this.ans4 = data.ans4
      console.log(this.ans4)
      this.ans5 = data.ans5
      console.log(this.ans5)
      this.ans6 = data.ans6
      console.log(this.ans6)
      this.ans7 = data.ans7
      console.log(this.ans7)
      this.ans8 = data.ans8
      console.log(this.ans8)
      this.ans9 = data.ans9
      console.log(this.ans9)
      this.ans10 = data.ans10
      console.log(this.ans10)
      this.ans11 = data.ans11
      console.log(this.ans11)
      this.ans12 = data.ans12
      console.log(this.ans12)
      this.ans13 = data.ans13
      console.log(this.ans13)
      this.ans14 = data.ans14
      console.log(this.ans14)
       this.ans15 = data.ans15
      console.log(this.ans15)
    });

}

}