import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalThrillerListComponent } from '@src/app/historical-thriller-list/historical-thriller-list.component';

describe('HistoricalThrillerListComponent', () => {
  let component: HistoricalThrillerListComponent;
  let fixture: ComponentFixture<HistoricalThrillerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalThrillerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalThrillerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
