import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
  skills:any[]=[
    {
      logo:' <i class="fa-brands fa-angular text-white fa-4x"></i>',
      name:' Angular',
      info:'Angular is a TypeScript-based framework for building dynamic scalable, and modular single-page web applications.'
    },
    {
      logo:' <i class="fa-brands fa-node text-white fa-4x"></i>',
      name:' Node JS',
      info:'Node.js is a JavaScript runtime that enables server-side scripting for building fast, scalable web applications.'
    },
    {
      logo:' <i class="fa-brands fa-envira text-white fa-4x"></i>',
      name:' Mongo DB',
      info:'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, enabling scalable, high-performance applications.'
    },
    {
      logo:' <i class="fa-brands fa-js text-white fa-4x"></i>',
      name:' Express JS',
      info:'Express.js is a minimal, fast, and flexible Node.js web framework for building robust APIs and web applications.'
    },
    {
      logo:' <i class="fa-brands fa-html5 text-white fa-4x"></i>',
      name:' HTML',
      info:'HTML (HyperText Markup Language) is the standard language used to structure and display content on the web.'
    },
    {
      logo:' <i class="fa-brands fa-css3-alt text-white fa-4x"></i>',
      name:' CSS',
      info:'CSS (Cascading Style Sheets) is a stylesheet language used to control the layout, design, and presentation of HTML documents on the web.'
    },
    {
      logo:' <i class="fa-brands fa-js text-white fa-4x"></i>',
      name:' JavaScript',
      info:'JavaScript (JS) is a versatile programming language used to add interactivity, dynamic content, and functionality to web pages.'
    },
    {
      logo:' <i class="fa-brands fa-bootstrap text-white fa-4x"></i>',
      name:' Bootstrap',
      info:'Bootstrap is a front-end framework for building responsive, mobile-first web designs with pre-designed components and grid systems.'
    },
    {
      logo:' <i class="fa-brands fa-java text-white fa-4x"></i>',
      name:' Java',
      info:'Java is a high-level, object-oriented programming language used for building cross-platform applications and systems.'
    },
    {
      logo:' <i class="fa-brands fa-github text-white fa-4x"></i>',
      name:' Github',
      info:'GitHub is a platform for version control and collaboration, allowing developers to manage and share code using Git.'
    },

  ]

  typedStrings: string[] = [
    'Full Stack / MEAN stack  web developer', 
    'Node JS developer',
    'Angular developer',
    'Professional coder'
  ];

  ngAfterViewInit(): void {
      this.waveHand()
      
  }

  goToWeb(website:string){
    window.open(website, '_blank'); 
  }

  waveHand(){
    gsap.to(".wave-hand", {
      rotate: 20,           
      yoyo: true,        
      repeat: -1,       
      ease: "power1.inOut", 
      duration: 0.5,       
    });
  }


}
