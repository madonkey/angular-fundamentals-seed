import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.model";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <h3>Airline Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers">
                    <span class="status" [ngClass]="{
                    'checked-in': passenger.checkedIn,
                    'checked-out': !passenger.checkedIn
                    }"></span>
                    {{ passenger.id }}: {{ passenger.fullname }}
                    <!-- <p>{{ passenger | json }}</p> -->
                    <div class="date">
                        Check in date: {{ passenger.checkedInDate ? ( passenger.checkedInDate | date: 'yMMMMd') : 'Not checked in' }}
                    </div>
                    <div class="children">
                        Children: {{ passenger.children?.length || 0 }}
                    </div>
                </li>
            </ul>
        </div>
    `
})

export class PassengerDashboardComponent implements OnInit { 

    passengers: Passenger[];

    constructor() {}

    ngOnInit() {
        console.log('ngOnInit');
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

}