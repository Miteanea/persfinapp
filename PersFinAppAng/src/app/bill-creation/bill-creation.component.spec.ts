import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCreationComponent } from './bill-creation.component';

describe('BillCreationComponent', () => {
  let component: BillCreationComponent;
  let fixture: ComponentFixture<BillCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
