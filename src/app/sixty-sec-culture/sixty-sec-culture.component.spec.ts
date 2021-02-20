import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixtySecCultureComponent } from './sixty-sec-culture.component';

describe('SixtySecCultureComponent', () => {
  let component: SixtySecCultureComponent;
  let fixture: ComponentFixture<SixtySecCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixtySecCultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixtySecCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
