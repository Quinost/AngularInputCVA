import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSelectComponent } from './qui-select.component';

describe('QuiSelectComponent', () => {
  let component: QuiSelectComponent;
  let fixture: ComponentFixture<QuiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
