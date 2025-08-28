import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcCodeBlockComponent } from './dc-code-block.component';

describe('DcCodeBlockComponent', () => {
  let component: DcCodeBlockComponent;
  let fixture: ComponentFixture<DcCodeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcCodeBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcCodeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
