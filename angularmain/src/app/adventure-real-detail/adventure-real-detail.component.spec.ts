import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureRealDetailComponent } from '@src/app/adventure-real-detail/adventure-real-detail.component';

describe('AdventureRealDetailComponent', () => {
  let component: AdventureRealDetailComponent;
  let fixture: ComponentFixture<AdventureRealDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureRealDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureRealDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
