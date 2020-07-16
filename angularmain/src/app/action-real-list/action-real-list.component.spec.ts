import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRealListComponent } from '@src/app/action-real-list/action-real-list.component';

describe('ActionRealListComponent', () => {
  let component: ActionRealListComponent;
  let fixture: ComponentFixture<ActionRealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionRealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionRealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
