import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BallSelectorComponent } from './ball-selector.component';

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BallSelectorComponent]
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(BallSelectorComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validate if number is selected from the panel', () => {
    component.selectNumber(2);
    expect(component.isPressed).toBe(2, 'Should be the same as input');
  });

  it('validate if section is cleared', () => {
    component.clearSelection();
    expect(component.isPressed).toBe(0, 'clear all the items');
  });

  it('validate if buttons are initialized', () => {
    expect(component.numbers.length).toBe(10, 'list of options from the begin of bet');
  });
});
