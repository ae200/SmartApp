import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionThrillerListComponent } from '@src/app/action-thriller-list/action-thriller-list.component';

describe('ActionThrillerListComponent', () => {
  let component: ActionThrillerListComponent;
  let fixture: ComponentFixture<ActionThrillerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionThrillerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionThrillerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
