import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroTitle: string = "We are your ultimate Adventure experience Provider";
  heroText: string = "With hundreds of cars offered, we are your natural choice planning it all out!";
  heroBtnText: string = "Learn More";
  heroBtnUrl: string  = "www.orf.at";
  constructor() { }

  ngOnInit(): void {
  }

}
