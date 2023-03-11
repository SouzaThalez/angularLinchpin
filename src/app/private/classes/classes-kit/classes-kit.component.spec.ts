import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesKitComponent } from './classes-kit.component';

describe('ClassesKitComponent', () => {
  let component: ClassesKitComponent;
  let fixture: ComponentFixture<ClassesKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
