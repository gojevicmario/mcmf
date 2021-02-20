import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCustomComponent } from './gallery-custom.component';

describe('GalleryCustomComponent', () => {
  let component: GalleryCustomComponent;
  let fixture: ComponentFixture<GalleryCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
