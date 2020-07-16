import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureDetailComponent } from '@src/app/adventure-detail/adventure-detail.component';

describe('AdventureDetailComponent', () => {
  let component: AdventureDetailComponent;
  let fixture: ComponentFixture<AdventureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
