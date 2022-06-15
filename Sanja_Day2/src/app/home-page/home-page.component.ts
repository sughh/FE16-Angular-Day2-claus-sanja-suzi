import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
cars: Array<{brand:string, model:string, img:string, year:number}> =[{
  brand: "BMW", 
  model: "A6", 
  img:"https://cdn.pixabay.com/photo/2018/07/12/16/05/bmw-3533813_960_720.jpg", 
  year: 2020
},
{
  brand: "VW", 
  model: "Tiguan", 
  img:"https://cdn.pixabay.com/photo/2019/01/27/15/45/vw-3958334_960_720.jpg", 
  year: 2019
},
{
  brand: "Tesla", 
  model: "A1", 
  img:"https://cdn.pixabay.com/photo/2021/01/21/11/09/tesla-5937063_960_720.jpg", 
  year: 2022
}
]
}
