import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaDetailComponent } from '../drama-detail/drama-detail.component';

describe('DramaDetailComponent', () => {
  let component: DramaDetailComponent;
  let fixture: ComponentFixture<DramaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
