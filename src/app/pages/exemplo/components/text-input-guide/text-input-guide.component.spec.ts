import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputGuideComponent } from './text-input-guide.component';

describe('TextInputGuideComponent', () => {
  let component: TextInputGuideComponent;
  let fixture: ComponentFixture<TextInputGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInputGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
