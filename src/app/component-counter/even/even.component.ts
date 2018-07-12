import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() even: any;
  @Input() evenNumber: any;
  @Output() evenCreated = new EventEmitter<number>();

  ngOnInit() {
    this.evenCreated.emit(this.evenNumber);
  }
}
