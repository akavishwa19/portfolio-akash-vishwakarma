import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations/fadiInAnimation';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.scss',
  animations:[fadeInAnimation]
})
export class BankComponent {

}
