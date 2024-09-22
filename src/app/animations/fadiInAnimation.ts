import { trigger, transition, style, animate, state } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInOut', [
    state('void', style({ opacity: 0 })),  
    transition(':enter', [ 
      animate('0.3s ease-in', style({ opacity: 1 }))
    ]),
    transition(':leave', [  
      animate('0.3s ease-out', style({ opacity: 0 }))
    ])
  ])