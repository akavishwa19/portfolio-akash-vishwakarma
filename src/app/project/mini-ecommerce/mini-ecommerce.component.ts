import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations/fadiInAnimation';

@Component({
  selector: 'app-mini-ecommerce',
  templateUrl: './mini-ecommerce.component.html',
  styleUrl: './mini-ecommerce.component.scss',
   animations:[fadeInAnimation]
})
export class MiniEcommerceComponent {

}
