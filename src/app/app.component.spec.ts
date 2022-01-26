import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        MatSnackBarModule
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent)
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it('should check if the index button is received', () => {
    component.getIndexButton(0);
    expect(component.indexReceived.length).toEqual(0, `Shouldn't have length`);

    component.getIndexButton(1);
    expect(component.indexReceived.length).toBeGreaterThan(0, 'If different of cero, length of array increased');

    for (let i = 1; i < 8; i++) {
      component.indexReceived.push(i)
    }
    expect(component.indexReceived.length).toBeLessThan(9, `Length shouldn't be major to 8`);
  });

  it('check value of result', () => {
    component.resolveBetStatus(5);
    expect(component.result).toBeGreaterThan(0, 'Result should be between 1 and 10');
  })
});
