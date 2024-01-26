import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
skills : Array<string> = [];

constructor(){
   this.skills = ["WEB DESIGN" , "MOBILE DESIGN", "LOGO DESIGN", "WEB APPLICATION", "MOBILE APPLICATION", "PWA DEVELOPMENT"]
}
}
