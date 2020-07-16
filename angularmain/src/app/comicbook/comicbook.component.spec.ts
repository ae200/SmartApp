import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicbookComponent } from './comicbook.component';

describe('ComicbookComponent', () => {
  let component: ComicbookComponent;
  let fixture: ComponentFixture<ComicbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
