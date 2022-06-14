import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  projectName: string = "Car shop";
  constructor() { }

  ngOnInit(): void {
  }
  counter: number = 0;
  clickCounter() {
    this.counter+=10;}
}
