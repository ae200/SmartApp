import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaThrillerListComponent } from '@src/app/drama-thriller-list/drama-thriller-list.component';

describe('DramaThrillerListComponent', () => {
  let component: DramaThrillerListComponent;
  let fixture: ComponentFixture<DramaThrillerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaThrillerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaThrillerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
