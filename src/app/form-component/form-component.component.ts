import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-form-component',

  templateUrl: './form-component.component.html',

  styleUrls: ['./form-component.component.css']

})

export class FormComponentComponent {

  submit(){

    console.log("Form Submitted !")

  }

}