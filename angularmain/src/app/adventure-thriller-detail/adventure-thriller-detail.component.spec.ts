import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureThrillerDetailComponent } from '@src/app/adventure-thriller-detail/adventure-thriller-detail.component';

describe('AdventureThrillerDetailComponent', () => {
  let component: AdventureThrillerDetailComponent;
  let fixture: ComponentFixture<AdventureThrillerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureThrillerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureThrillerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
