import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyRealListComponent } from '@src/app/comedy-real-list/comedy-real-list.component';

describe('ComedyRealListComponent', () => {
  let component: ComedyRealListComponent;
  let fixture: ComponentFixture<ComedyRealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedyRealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedyRealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
