import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitConfirmModalComponent } from './kit-confirm-modal.component';

describe('KitConfirmModalComponent', () => {
  let component: KitConfirmModalComponent;
  let fixture: ComponentFixture<KitConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitConfirmModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
