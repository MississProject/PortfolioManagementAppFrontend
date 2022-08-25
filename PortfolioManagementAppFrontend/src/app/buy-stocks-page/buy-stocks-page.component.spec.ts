import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyStocksPageComponent } from './buy-stocks-page.component';

describe('BuyStocksPageComponent', () => {
  let component: BuyStocksPageComponent;
  let fixture: ComponentFixture<BuyStocksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyStocksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyStocksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
