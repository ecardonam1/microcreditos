import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabadministradorPage } from './tabadministrador.page';

describe('TabadministradorPage', () => {
  let component: TabadministradorPage;
  let fixture: ComponentFixture<TabadministradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabadministradorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabadministradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
