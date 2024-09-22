import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations/fadiInAnimation';

@Component({
  selector: 'app-kanappa',
  templateUrl: './kanappa.component.html',
  styleUrl: './kanappa.component.scss',
  animations:[fadeInAnimation]
})
export class KanappaComponent {

}
