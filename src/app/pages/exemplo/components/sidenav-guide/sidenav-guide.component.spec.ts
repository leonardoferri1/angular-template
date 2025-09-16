import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavGuideComponent } from './sidenav-guide.component';

describe('SidenavGuideComponent', () => {
  let component: SidenavGuideComponent;
  let fixture: ComponentFixture<SidenavGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
