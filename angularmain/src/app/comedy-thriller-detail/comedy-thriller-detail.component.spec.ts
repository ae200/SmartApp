import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyThrillerDetailComponent } from '@src/app/comedy-thriller-detail/comedy-thriller-detail.component';

describe('ComedyThrillerDetailComponent', () => {
  let component: ComedyThrillerDetailComponent;
  let fixture: ComponentFixture<ComedyThrillerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedyThrillerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedyThrillerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
