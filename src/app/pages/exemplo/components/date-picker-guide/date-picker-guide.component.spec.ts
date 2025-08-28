import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerGuideComponent } from './date-picker-guide.component';

describe('DatePickerGuideComponent', () => {
  let component: DatePickerGuideComponent;
  let fixture: ComponentFixture<DatePickerGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
