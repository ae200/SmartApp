import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyDetailComponent } from '@src/app/comedy-detail/comedy-detail.component';

describe('ComedyDetailComponent', () => {
  let component: ComedyDetailComponent;
  let fixture: ComponentFixture<ComedyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
