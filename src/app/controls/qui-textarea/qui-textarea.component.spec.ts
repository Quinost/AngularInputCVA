import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiTextareaComponent } from './qui-textarea.component';

describe('QuiTextareaComponent', () => {
  let component: QuiTextareaComponent;
  let fixture: ComponentFixture<QuiTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
