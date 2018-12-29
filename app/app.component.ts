import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{ evenOrOdd }}
    </div>
  `
})
export class AppComponent {
  min: number;
  evenOrOdd: string;
  constructor() {
    this.min = this.getTime();
    this.isEven(this.min);
  }
  getTime() {
    return new Date().getMinutes();
  }
  num = this.min;
  isEven(num: number) {
    if ((num % 2) === 0) {
      this.evenOrOdd = 'Even';
    } else {
      this.evenOrOdd = 'Odd';
    }
  }

}
