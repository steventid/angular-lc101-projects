import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;

   buttons: Object = {
      gold: true,
      silver: true,
      copper: true
   }

   //joke buttons
   jokeButtonHeading: string = "Joke Buttons";
   buttonPosition: string = "center";

   constructor() { }

   ngOnInit() { }

   reactivate() {
      for(let key of Object.keys(this.buttons)) {
         this.buttons[key] = true;
      }
   }

   changePosition() {
      let arr: string[] = ["left", "right", "center"];
      //filter current pos out of array so we always move elsewhere
      arr = arr.filter(e => e !== this.buttonPosition);
      this.buttonPosition = arr[Math.floor(Math.random()*2)];
   }

}
