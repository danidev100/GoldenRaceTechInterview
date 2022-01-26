import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BetSlipComponent } from './bet-slip.component';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BetSlipComponent],
      imports: [MatSnackBarModule, BrowserAnimationsModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(BetSlipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check size of bet', () => {
    component.readBet(2);
    expect(component.totalBet).toBe(0, 'Should be greater than 5');

    component.readBet(10);
    expect(component.totalBet).toBe(50, 'value modified by the multiplier');
  });

  it('validate array at begin', () => {
    component.index.length = 0;
    expect(component.resultLottery).toBe(0, 'if index 0, not allowed bet');

    component.index.length = 1;
    component.index[0] = 5;
    component.resultLottery = 5;
    component.totalBet = 100;
    expect(component.totalBet * 1.5).toBe(150);
  });

  it('validate random result', () => {
    let number = component.randomIntFromInterval(1, 10);
    expect(number).toBeGreaterThanOrEqual(1, 'be greater or equal to 1');
    expect(number).toBeLessThanOrEqual(10, 'be less or equal to 10');
  });
});
