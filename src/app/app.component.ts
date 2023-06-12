import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'binding';

  public name = "Simplilearn"

  public topic = "Data Binding"

  public image="assets/Wavy_Bus-33_Single-03.jpg"

  public random = ""
  
  onClick(){

    console.log("Thanks for subscribing")

  }

  submit(){

    console.log("Form Submitted !")

  }



  
}

