import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiInput3Component } from './qui-input3.component';

describe('QuiInput3Component', () => {
  let component: QuiInput3Component;
  let fixture: ComponentFixture<QuiInput3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiInput3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiInput3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
