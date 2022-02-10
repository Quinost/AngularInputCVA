import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiInput5Component } from './qui-input5.component';

describe('QuiInput5Component', () => {
  let component: QuiInput5Component;
  let fixture: ComponentFixture<QuiInput5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiInput5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiInput5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
