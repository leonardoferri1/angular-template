import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectGuideComponent } from './multiselect-guide.component';

describe('MultiselectGuideComponent', () => {
  let component: MultiselectGuideComponent;
  let fixture: ComponentFixture<MultiselectGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiselectGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiselectGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
