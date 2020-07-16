import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionThrillerDetailComponent } from '@src/app/fiction-thriller-detail/fiction-thriller-detail.component';

describe('FictionThrillerDetailComponent', () => {
  let component: FictionThrillerDetailComponent;
  let fixture: ComponentFixture<FictionThrillerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictionThrillerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionThrillerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
