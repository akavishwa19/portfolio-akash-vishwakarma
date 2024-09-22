import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations/fadiInAnimation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations:[fadeInAnimation]
})
export class AboutComponent {

}
