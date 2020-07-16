import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionDetailComponent } from '../fiction-detail/fiction-detail.component';

describe('FictionDetailComponent', () => {
  let component: FictionDetailComponent;
  let fixture: ComponentFixture<FictionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
