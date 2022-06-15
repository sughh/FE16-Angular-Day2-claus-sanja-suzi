import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cars: Array<{ name: string, text: string, img: string }> = [
    {
      name: "VW Golf",
      text: "Nettes Auto, aber Deutsch",
      img: "https://uploads.volkswagen-newsroom.com/system/production/media/008/975/images/a4f89682c4e01701b5b08e8bebfe21bb17d4b74a/DB2007AU00369_web_1600.jpg?1649147550"
    },{
      name: "Peugeot 107",
      text: "Nettes Auto, aber Franzose",
      img: "https://cdn.prod.www.spiegel.de/images/86af9f62-0001-0004-0000-000001273401_w1528_r1.389854065323141_fpx35.95_fpy49.97.jpg"
        },{
      name:"Fiat 500",
      text: "Nettes Auto, aber Italiener",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfuYwnMQrsiq9SOLod6KR_zhxBnaWhUJJ9g&usqp=CAU"
    }
   ];

   newCars = new FormGroup({
    name: new FormControl("",Validators.required),
    text: new FormControl("",Validators.required),
    img: new FormControl("",Validators.required)
  });

  onSubmit(){
    if (this.newCars.valid){
      // let submission: Array<{ name: string, text: string, img: string }>  = [{
      //   name: this.newCars.name.value
      //   text:
      // }];
      let submission: any = this.newCars.value;
      // this.cars = this.cars.push(a);
      this.cars.push(submission);
      console.log(submission);
      console.log(this.cars)
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
