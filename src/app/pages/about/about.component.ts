import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations/fadiInAnimation';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations:[fadeInAnimation]
})
export class AboutComponent {
  constructor(
   
    private location:Location
  ) {}

  goBack(){
    this.location.back()  
  }
}
