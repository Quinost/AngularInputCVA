import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiAutoCompleteComponent } from './qui-auto-complete.component';

describe('QuiAutoCompleteComponent', () => {
  let component: QuiAutoCompleteComponent;
  let fixture: ComponentFixture<QuiAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiAutoCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
