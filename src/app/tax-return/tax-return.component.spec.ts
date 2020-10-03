import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxReturnComponent } from './tax-return.component';

describe('TaxReturnComponent', () => {
  let component: TaxReturnComponent;
  let fixture: ComponentFixture<TaxReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
