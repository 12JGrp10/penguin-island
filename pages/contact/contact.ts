import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css']
})
export class ContactPage {
  sex: string;
  height: number;
  weight: number;
  age: number;
  Calories: number;
  total: number;
  activity: number;
  CalorieMessage: string;
  Note: string;
  x: string = "testing";
  y: string = "test also";

  constructor(public navCtrl: NavController) {}
  
  
  calculateCalories() {
    
    if (this.sex === "m") { 
      this.Calories = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5);
    }
    else if (this.sex === "f") { 
      this.Calories = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161);
    } 
    else{
      this.Calories = 0.01;
    }


    if (this.age <= 17){
      console.log(this.x);
      this.Note = "You must be at least 18 years and above to try this daily intake calculator."; 
      this.total = parseFloat((this.Calories * this.activity).toFixed(2));
    }
    else {
      this.Note = "";
      console.log(this.y);
      this.total = parseFloat((this.Calories * this.activity).toFixed(2));
    }
    }
    }