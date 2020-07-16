import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaRealListComponent } from '@src/app/drama-real-list/drama-real-list.component';

describe('DramaRealListComponent', () => {
  let component: DramaRealListComponent;
  let fixture: ComponentFixture<DramaRealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaRealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaRealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
