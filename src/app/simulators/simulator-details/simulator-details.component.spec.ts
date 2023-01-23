import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorDetailsComponent } from './simulator-details.component';

describe('SimulatorDetailsComponent', () => {
  let component: SimulatorDetailsComponent;
  let fixture: ComponentFixture<SimulatorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
