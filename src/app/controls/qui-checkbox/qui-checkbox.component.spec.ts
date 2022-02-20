import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiCheckboxComponent } from './qui-checkbox.component';

describe('QuiCheckboxComponent', () => {
  let component: QuiCheckboxComponent;
  let fixture: ComponentFixture<QuiCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
