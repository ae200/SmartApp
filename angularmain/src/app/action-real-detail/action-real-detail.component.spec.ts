import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRealDetailComponent } from '@src/app/action-real-detail/action-real-detail.component';

describe('ActionRealDetailComponent', () => {
  let component: ActionRealDetailComponent;
  let fixture: ComponentFixture<ActionRealDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionRealDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionRealDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
