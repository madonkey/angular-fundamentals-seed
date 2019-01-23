import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.model";
import { eventNames } from "cluster";


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count [items]="passengers"></passenger-count>
      <div *ngFor="let passenger of passengers">{{ passenger.fullname }}</div>
      <passenger-detail *ngFor="let passenger of passengers" [detail]="passenger" (edit)="handleEdit($event)" (remove)="handleRemove($event)"></passenger-detail>
    </div>
    `
})

export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];

  constructor() { }

  ngOnInit() {
    this.passengers = [{
      id: 1,
      fullname: 'Dermot',
      checkedIn: true,
      checkedInDate: 614217600000,
      children: [{ name: 'Blah', age: 1 }, { name: 'Derp', age: 5 }]
    }, {
      id: 2,
      fullname: 'Keelin',
      checkedIn: false,
      children: null
    }, {
      id: 3,
      fullname: 'Ollie',
      checkedIn: true,
      checkedInDate: 1491642000000,
      children: null
    }, {
      id: 4,
      fullname: 'Lola',
      checkedIn: false,
      children: null
    }]
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }


  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    })
  }

}