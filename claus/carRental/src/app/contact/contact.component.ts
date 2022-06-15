import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts = new FormGroup({
    firstName: new FormControl("",Validators.minLength(3)),
    lastName: new FormControl("",Validators.minLength(2)),
    email: new FormControl("",Validators.email)
  });

  onSubmit(){
    if (this.contacts.valid){
      var a = this.contacts.value;
      console.log(a);
    }
  };

  constructor() { }

  ngOnInit(): void {
  };

}
