import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat2Page } from './cat2.page';

describe('Cat2Page', () => {
  let component: Cat2Page;
  let fixture: ComponentFixture<Cat2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cat2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
