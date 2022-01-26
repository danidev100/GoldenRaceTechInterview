import { Component } from '@angular/core';

import { SnackAlertService } from './Services/snack-alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  indexReceived: number[];
  result: number;

  constructor(
    private snack: SnackAlertService
  ) {
    this.indexReceived = [];
    this.result = 0;
  }
  getIndexButton(event: any): void {
    event === 0 ? this.indexReceived = [] : (this.indexReceived.length === 8 ? this.snack.openSnackBar('Número máximo alcanzado', 'Aceptar', 5000) : this.indexReceived.push(event));
  }

  resolveBetStatus(event: any) {
    this.result = event;
  }
}
