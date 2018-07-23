import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styles: [`
    h5 {
      color: blue;
      display: inline;
      font-size: 1.2rem;
    }
  `]
})
export class OddComponent implements OnInit {
  @Input() odd: any;
  @Input() oddNumber: any;
  @Output() oddCreated = new EventEmitter<number>();

  ngOnInit() {
    this.oddCreated.emit(this.oddNumber);
  }
}
