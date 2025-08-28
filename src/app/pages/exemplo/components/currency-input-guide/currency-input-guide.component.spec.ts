import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyInputGuideComponent } from './currency-input-guide.component';

describe('CurrencyInputGuideComponent', () => {
  let component: CurrencyInputGuideComponent;
  let fixture: ComponentFixture<CurrencyInputGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyInputGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyInputGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
