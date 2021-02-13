/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirstTransnationalMeetingPostComponent } from './first-transnational-meeting-post.component';

describe('FirstTransnationalMeetingPostComponent', () => {
  let component: FirstTransnationalMeetingPostComponent;
  let fixture: ComponentFixture<FirstTransnationalMeetingPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTransnationalMeetingPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTransnationalMeetingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
