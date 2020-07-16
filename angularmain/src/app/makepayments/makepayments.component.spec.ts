import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakepaymentsComponent } from '@src/app/makepayments/makepayments.component';

describe('MakepaymentsComponent', () => {
  let component: MakepaymentsComponent;
  let fixture: ComponentFixture<MakepaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakepaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakepaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
