import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionListComponent } from '../fiction-list/fiction-list.component';

describe('FictionListComponent', () => {
  let component: FictionListComponent;
  let fixture: ComponentFixture<FictionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
