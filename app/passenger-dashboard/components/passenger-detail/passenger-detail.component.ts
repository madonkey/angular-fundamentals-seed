import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger.model";

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status" [ngClass]="{'checked-in': detail.checkedIn,'checked-out': !detail.checkedIn}"></span>
            <div *ngIf="editing">
                <input type="text" [value]="detail.fullname" (input)="onNameChange(name.value)" #name>
            </div>
            <div *ngIf="!editing">
                {{ detail.fullname }}
            </div>
            <!-- <p>{{ passenger | json }}</p> -->
            <div class="date">
                Check in date: {{ detail.checkedInDate ? ( detail.checkedInDate | date: 'yMMMMd') : 'Not checked in' }}
            </div>
            <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
            <button (click)="onRemove()">Remove</button>
        </div>
    `
})
export class PassengerDetailComponent implements OnChanges {
    @Input() detail: Passenger;

    @Output() remove: EventEmitter<any> = new EventEmitter();
    @Output() edit: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;

    constructor() { }

    ngOnChanges(changes) {
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }

    onNameChange(value: string) {
        this.detail.fullname = value;
    }

    toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;

    }
    onRemove() {
        this.remove.emit(this.detail);
    }
}