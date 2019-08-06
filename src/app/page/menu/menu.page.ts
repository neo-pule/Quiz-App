import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @ViewChild('Slides') slides: IonSlides;
  constructor() { }
  Next(){
   
    this.slides.slideNext()
   }
  
  ngOnInit() {
  }

}
