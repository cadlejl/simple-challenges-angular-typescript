import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'days-btw-dates',
    templateUrl: './days-btw-dates.component.html',
    styleUrls: [ './days-btw-dates.component.css' ]
})

export class DaysBtwDatesComponent  {
    private date1Moment: moment.Moment;
    private date2Moment: moment.Moment;
    private daysLabel: string;

    addEvent($event:any, input: number) {
        let dateMoment = moment.utc($event.value._i)

        switch (input) {
            case 1:
                this.date1Moment = dateMoment; break;
            case 2:
                this.date2Moment = dateMoment; break;
        }

        if (this.date1Moment && this.date2Moment) this.calculateDays();
    }

    calculateDays() {
        let diffNumber: number = this.date1Moment.diff(this.date2Moment)
        let absoluteNumber: number = Math.abs(diffNumber);
        let days: number = absoluteNumber / 1000 / 60 / 60 / 24;
        this.configureDaysString(days);
    }

    configureDaysString(days: number) {
        this.daysLabel = `
            There are 
            ${days.toLocaleString()} days between
            ${this.date1Moment.format("dddd, MMMM Do YYYY")}, 
            and
            ${this.date2Moment.format("dddd, MMMM Do YYYY")}
        `
    }
}