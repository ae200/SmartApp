import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionThrillerDetailComponent } from '@src/app/action-thriller-detail/action-thriller-detail.component';

describe('ActionThrillerDetailComponent', () => {
  let component: ActionThrillerDetailComponent;
  let fixture: ComponentFixture<ActionThrillerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionThrillerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionThrillerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
