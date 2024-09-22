import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations/fadiInAnimation';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrl: './doc.component.scss',
  animations:[fadeInAnimation]
})
export class DocComponent {

}
