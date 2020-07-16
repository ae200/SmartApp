import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaThrillerDetailComponent } from '@src/app/drama-thriller-detail/drama-thriller-detail.component';

describe('DramaThrillerDetailComponent', () => {
  let component: DramaThrillerDetailComponent;
  let fixture: ComponentFixture<DramaThrillerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaThrillerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaThrillerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
