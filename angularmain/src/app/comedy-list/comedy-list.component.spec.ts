import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyListComponent } from '@src/app/comedy-list/comedy-list.component';

describe('ComedyListComponent', () => {
  let component: ComedyListComponent;
  let fixture: ComponentFixture<ComedyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
