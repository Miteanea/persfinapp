import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenStatsComponent } from './gen-stats.component';

describe('GenStatsComponent', () => {
  let component: GenStatsComponent;
  let fixture: ComponentFixture<GenStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
