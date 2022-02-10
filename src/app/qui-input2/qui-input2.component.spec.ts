import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiInput2Component } from './qui-input2.component';

describe('QuiInput2Component', () => {
  let component: QuiInput2Component;
  let fixture: ComponentFixture<QuiInput2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiInput2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
