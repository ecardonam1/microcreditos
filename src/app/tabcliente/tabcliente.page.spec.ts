import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabclientePage } from './tabcliente.page';

describe('TabclientePage', () => {
  let component: TabclientePage;
  let fixture: ComponentFixture<TabclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabclientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
