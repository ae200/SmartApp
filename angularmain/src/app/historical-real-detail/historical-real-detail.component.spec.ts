import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalRealDetailComponent } from '@src/app/historical-real-detail/historical-real-detail.component';

describe('HistoricalRealDetailComponent', () => {
  let component: HistoricalRealDetailComponent;
  let fixture: ComponentFixture<HistoricalRealDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalRealDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalRealDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
