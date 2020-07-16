import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyThrillerListComponent } from '@src/app/comedy-thriller-list/comedy-thriller-list.component';

describe('ComedyThrillerListComponent', () => {
  let component: ComedyThrillerListComponent;
  let fixture: ComponentFixture<ComedyThrillerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedyThrillerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedyThrillerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
