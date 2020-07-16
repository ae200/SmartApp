import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionRealDetailComponent } from '@src/app/fiction-real-detail/fiction-real-detail.component';

describe('FictionRealDetailComponent', () => {
  let component: FictionRealDetailComponent;
  let fixture: ComponentFixture<FictionRealDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictionRealDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionRealDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
