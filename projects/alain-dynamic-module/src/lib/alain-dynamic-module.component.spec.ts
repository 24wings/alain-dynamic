import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlainDynamicModuleComponent } from './alain-dynamic-module.component';

describe('AlainDynamicModuleComponent', () => {
  let component: AlainDynamicModuleComponent;
  let fixture: ComponentFixture<AlainDynamicModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlainDynamicModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlainDynamicModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
