import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalRealListComponent } from '@src/app/historical-real-list/historical-real-list.component';

describe('HistoricalRealListComponent', () => {
  let component: HistoricalRealListComponent;
  let fixture: ComponentFixture<HistoricalRealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalRealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalRealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
