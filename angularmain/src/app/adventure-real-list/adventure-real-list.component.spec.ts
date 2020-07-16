import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureRealListComponent } from '@src/app/adventure-real-list/adventure-real-list.component';

describe('AdventureRealListComponent', () => {
  let component: AdventureRealListComponent;
  let fixture: ComponentFixture<AdventureRealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureRealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureRealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
