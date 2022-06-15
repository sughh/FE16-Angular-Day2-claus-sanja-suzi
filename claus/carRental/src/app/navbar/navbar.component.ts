import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  counter: number = 0;

  countDonate() {
    this.counter += 10;
    console.log(this.counter);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
