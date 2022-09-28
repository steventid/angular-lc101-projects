import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeOffEnabled: boolean = true;

  //width of the background element
  bgWidth = 0;
  //height of the background element
  bgHeight = 0;

  disableButton = {
    right: false,
    left: false,
    up: false,
    down: false
  }

  @HostListener('window:load')
  onLoad() {
    this.bgWidth = document.getElementById('bg').offsetWidth;
    this.bgHeight = document.getElementById('bg').offsetHeight;
  }

  @HostListener('window:resize')
  onResize() {
    this.bgWidth = document.getElementById('bg').offsetWidth;
    this.bgHeight = document.getElementById('bg').offsetHeight;
  }

  takeOff(rocket) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
      rocket.style.bottom = '10px';
    }
  }

  doLand(rocket) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.message = 'The shuttle has landed.';
    this.color = 'green';
    this.height = 0;
    rocket.style.bottom = '0px';
    this.takeOffEnabled = true;
  }

  abortMission(rocket) {
    let result = window.confirm('Do you really want to abort the mission?');
    if (result) {
      this.message = 'Mission aborted.';
      this.color = 'red';
      this.height = 0;
      rocket.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocket, dir, bg) {
    let horizontalMovement = parseInt(rocket.style.left);
    let verticalMovement = parseInt(rocket.style.bottom);
    if(dir === 'right') {
      rocket.style.left =  horizontalMovement + 10 + 'px';
      this.width += 10000;
    } else if(dir === 'left') {
      rocket.style.left =  horizontalMovement - 10 + 'px';
      this.width -= 10000;
    } else if(dir === 'up') {
      rocket.style.bottom = verticalMovement + 10 + 'px';
      this.height += 10000;
    } else if(dir === 'down') {
      rocket.style.bottom = verticalMovement - 10 + 'px';
      this.height -= 10000;
    }
    this.checkWarning();
    this.checkPosition(rocket);
  }

  checkPosition(rocket) {
    let horizontalPos = parseInt(rocket.style.left);
    let verticalPos = parseInt(rocket.style.bottom);
    //reset all the buttons
    this.disableButton = {
      right: false,
      left: false,
      up: false,
      down: false
    }

    //disable as needed
    if (horizontalPos <= -20) {
      this.disableButton.left = true;
    }
    if (horizontalPos >= this.bgWidth - 60) {
      this.disableButton.right = true;
    }
    if (verticalPos <= 0) {
      this.disableButton.down = true;
    }
    if (verticalPos >= this.bgHeight - 70) {
      this.disableButton.up = true;
    }

  }

  checkWarning() {
    if (this.width > 460000 || this.width < -10000 || this.height > 320000 || this.height < 10000) {
      this.color = 'orange';
      return;
    }
    //reset color to blue since we're flying
    this.color = 'blue';
  }
}
