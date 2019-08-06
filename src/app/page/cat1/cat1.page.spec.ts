import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat1Page } from './cat1.page';

describe('Cat1Page', () => {
  let component: Cat1Page;
  let fixture: ComponentFixture<Cat1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cat1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
