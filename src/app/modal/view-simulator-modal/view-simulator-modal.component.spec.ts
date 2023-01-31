import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSimulatorModalComponent } from './view-simulator-modal.component';

describe('ViewSimulatorModalComponent', () => {
  let component: ViewSimulatorModalComponent;
  let fixture: ComponentFixture<ViewSimulatorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSimulatorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSimulatorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
