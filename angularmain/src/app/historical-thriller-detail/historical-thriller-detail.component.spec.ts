import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalThrillerDetailComponent } from '@src/app/historical-thriller-detail/historical-thriller-detail.component';

describe('HistoricalThrillerDetailComponent', () => {
  let component: HistoricalThrillerDetailComponent;
  let fixture: ComponentFixture<HistoricalThrillerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalThrillerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalThrillerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
