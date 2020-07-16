import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionRealListComponent } from '@src/app/fiction-real-list/fiction-real-list.component';

describe('FictionRealListComponent', () => {
  let component: FictionRealListComponent;
  let fixture: ComponentFixture<FictionRealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictionRealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionRealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
