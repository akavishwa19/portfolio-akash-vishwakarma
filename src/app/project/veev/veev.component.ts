import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations/fadiInAnimation';

@Component({
  selector: 'app-veev',
  templateUrl: './veev.component.html',
  styleUrl: './veev.component.scss',
  animations:[fadeInAnimation]
})
export class VeevComponent {

}
