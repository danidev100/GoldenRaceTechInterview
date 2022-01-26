import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SnackAlertService } from './../../Services/snack-alert.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit {

  @Input() index: number[];
  @Output() status: EventEmitter<any> = new EventEmitter<any>();

  betSaved: number;
  totalBet: number;
  multiplier: number;
  inputValue: any;
  resultLottery: number;
  isWinner: boolean;

  constructor(
    private snack: SnackAlertService
  ) {
    this.isWinner = false;
    this.resultLottery = 0;
    this.inputValue = 0;
    this.multiplier = 5;
    this.betSaved = 0;
    this.totalBet = 0;
    this.index = [];
  }

  ngOnInit(): void {
  }

  readBet(event: any) {
    event < 5 ? this.totalBet = 0 : this.totalBet = event * this.multiplier;
    event < 5 ? this.snack.openSnackBar('Ingresa un valor mayor a 5', 'Aceptar', 5000) : this.betSaved = event;
  }

  playGame(): void {
    if (this.index.length > 0 && this.totalBet !== 0) {
      // Generate random number between 1 and 10
      this.resultLottery = this.randomIntFromInterval(1, 10);
      this.index.includes(this.resultLottery) ? this.isWinner = true : this.isWinner = false;
      this.status.emit({ result: this.isWinner, value: this.resultLottery, totalBet: this.totalBet, betProfit: this.totalBet * 1.5 });
    } else {
      this.snack.openSnackBar('Agrega un valor válido para apostar', 'Aceptar', 5000);
    }
  }

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
