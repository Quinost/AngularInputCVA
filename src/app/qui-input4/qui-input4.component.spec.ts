import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiInput4Component } from './qui-input4.component';

describe('QuiInput4Component', () => {
  let component: QuiInput4Component;
  let fixture: ComponentFixture<QuiInput4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiInput4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiInput4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
