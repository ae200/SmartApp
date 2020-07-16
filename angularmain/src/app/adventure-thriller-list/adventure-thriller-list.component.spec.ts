import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureThrillerListComponent } from '@src/app/adventure-thriller-list/adventure-thriller-list.component';

describe('AdventureThrillerListComponent', () => {
  let component: AdventureThrillerListComponent;
  let fixture: ComponentFixture<AdventureThrillerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureThrillerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureThrillerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
