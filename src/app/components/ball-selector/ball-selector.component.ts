import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

  @Output() buttonPressed = new EventEmitter<number>();
  @Input() resultBet: any;

  numbers: Array<number>;
  isPressed: number;
  resultLottery: boolean;

  constructor() {
    this.resultLottery = false;
    this.isPressed = 0;
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  ngOnInit(): void {
  }

  selectNumber(i: number) {
    this.buttonPressed.emit(i);
    this.isPressed = i;
  }

  clearSelection(): void {
    this.buttonPressed.emit(0);
    this.isPressed = 0;
  }

}
