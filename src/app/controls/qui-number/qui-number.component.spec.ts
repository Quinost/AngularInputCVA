import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiNumberComponent } from './qui-number.component';

describe('QuiNumberComponent', () => {
  let component: QuiNumberComponent;
  let fixture: ComponentFixture<QuiNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
