import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
formInfo = new FormGroup({
  firstName: new FormControl("", Validators.required),
  lastName: new FormControl("", Validators.required),
  email: new FormControl("", Validators.email)

})
takingValuesFromInputs(){
  if(this.formInfo.valid){ //Validators!!!
let values = this.formInfo.value;
  console.log(values);
  }
  
}

}
