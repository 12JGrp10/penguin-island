import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  sex: string;
  height: number;
  weight: number;
  age: number;
  Calories: number;
  total: number;
  activity: number;
  CaloriesMessage: string;
  

  constructor(public navCtrl: NavController) {}
  

  calculateCalories() {


    if (this.sex === "m") { 
    console.log("hello world");
      this.Calories = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5);
    }
    else if (this.sex === "f") { 
      this.Calories = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161);
    } 
    else{
      this.Calories = 0.01;
    }

    
    this.total = parseFloat((this.Calories * this.activity).toFixed(2));

    }
  
    }