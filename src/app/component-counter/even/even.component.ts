import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styles: [`
    h5 {
      color: rgb(5, 185, 5);
      display: inline;
      font-size: 1.2rem;
    }
  `]
})
export class EvenComponent implements OnInit {
  @Input() even: any;
  @Input() evenNumber: any;
  @Output() evenCreated = new EventEmitter<number>();

  ngOnInit() {
    this.evenCreated.emit(this.evenNumber);
  }
}
