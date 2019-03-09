import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {
    public value = 10;
    sqlength = 4;
    Area = 0;
    Perimeter = 0;
    radius = 5;
    circleArea = 0;

constructor() { }

getArea(Area) {
  return this.Area = this.sqlength * this.sqlength;

}
getPerimeter(Perimeter) {
  return this.Perimeter = this.sqlength * 4;
}

getCircleArea(circleArea) {
  return this.circleArea = Math.PI * this.radius * this.radius;

}



}
