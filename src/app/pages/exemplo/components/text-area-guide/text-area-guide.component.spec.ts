import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaGuideComponent } from './text-area-guide.component';

describe('TextAreaGuideComponent', () => {
  let component: TextAreaGuideComponent;
  let fixture: ComponentFixture<TextAreaGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAreaGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreaGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
