import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationMasterCrudComponent } from './specification-master-crud.component';

describe('SpecificationMasterCrudComponent', () => {
  let component: SpecificationMasterCrudComponent;
  let fixture: ComponentFixture<SpecificationMasterCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificationMasterCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificationMasterCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
