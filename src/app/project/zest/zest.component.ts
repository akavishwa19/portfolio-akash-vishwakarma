import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations/fadiInAnimation';

@Component({
  selector: 'app-zest',
  templateUrl: './zest.component.html',
  styleUrl: './zest.component.scss',
  animations:[fadeInAnimation]
})
export class ZestComponent {

}
