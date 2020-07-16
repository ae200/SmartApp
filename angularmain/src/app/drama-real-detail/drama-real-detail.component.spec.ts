import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaRealDetailComponent } from '@src/app/drama-real-detail/drama-real-detail.component';

describe('DramaRealDetailComponent', () => {
  let component: DramaRealDetailComponent;
  let fixture: ComponentFixture<DramaRealDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaRealDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaRealDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
