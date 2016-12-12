/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenologyComponent } from './genology.component';

describe('GenologyComponent', () => {
  let component: GenologyComponent;
  let fixture: ComponentFixture<GenologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
