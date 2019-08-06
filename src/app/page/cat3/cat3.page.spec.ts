import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat3Page } from './cat3.page';

describe('Cat3Page', () => {
  let component: Cat3Page;
  let fixture: ComponentFixture<Cat3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cat3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
