import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DotaskService {

    sqlength = 5;
    result = 0;
    Area = 0;

  constructor() { }

  doFirstTask() {
    return this.sqlength * this.sqlength;
  }

  doSecondTask() {
    return this.sqlength * 4;
  }

  doThirdTask() {
    return Math.PI * this.sqlength * this.sqlength;
  }

}
