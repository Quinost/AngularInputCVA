import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiInputComponent } from './qui-input.component';

describe('QuiInputComponent', () => {
  let component: QuiInputComponent;
  let fixture: ComponentFixture<QuiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
