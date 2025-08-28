import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownGuideComponent } from './dropdown-guide.component';

describe('DropdownGuideComponent', () => {
  let component: DropdownGuideComponent;
  let fixture: ComponentFixture<DropdownGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
