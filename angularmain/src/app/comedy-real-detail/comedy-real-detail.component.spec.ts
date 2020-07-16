import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyRealDetailComponent } from '@src/app/comedy-real-detail/comedy-real-detail.component';

describe('ComedyRealDetailComponent', () => {
  let component: ComedyRealDetailComponent;
  let fixture: ComponentFixture<ComedyRealDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedyRealDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedyRealDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
