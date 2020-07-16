import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionThrillerListComponent } from '@src/app/fiction-thriller-list/fiction-thriller-list.component';

describe('FictionThrillerListComponent', () => {
  let component: FictionThrillerListComponent;
  let fixture: ComponentFixture<FictionThrillerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictionThrillerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionThrillerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
