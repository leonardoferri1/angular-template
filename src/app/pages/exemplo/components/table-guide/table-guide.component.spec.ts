import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGuideComponent } from './table-guide.component';

describe('TableGuideComponent', () => {
  let component: TableGuideComponent;
  let fixture: ComponentFixture<TableGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
