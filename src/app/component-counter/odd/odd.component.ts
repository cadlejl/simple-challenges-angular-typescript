import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() odd: any;
  @Input() oddNumber: any;
  @Output() oddCreated = new EventEmitter<number>();

  ngOnInit() {
    this.oddCreated.emit(this.oddNumber);
  }
}
