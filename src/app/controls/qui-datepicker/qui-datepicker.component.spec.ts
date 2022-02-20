import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiDatepickerComponent } from './qui-datepicker.component';

describe('QuiDatepickerComponent', () => {
  let component: QuiDatepickerComponent;
  let fixture: ComponentFixture<QuiDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
