import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.model";

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status" [ngClass]="{
            'checked-in': detail.checkedIn,
            'checked-out': !detail.checkedIn
            }"></span>
            {{ detail.fullname }}
            <!-- <p>{{ passenger | json }}</p> -->
            <div class="date">
                Check in date: {{ detail.checkedInDate ? ( detail.checkedInDate | date: 'yMMMMd') : 'Not checked in' }}
            </div>
            <div class="children">
                Children: {{ detail.children?.length || 0 }}
            </div>
        </div>
    `
})
export class PassengerDetailComponent {
    @Input()
    detail: Passenger;
    constructor() { }
}