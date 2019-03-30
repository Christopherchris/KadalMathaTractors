import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyworksComponent } from './dailyworks.component';

describe('DailyworksComponent', () => {
  let component: DailyworksComponent;
  let fixture: ComponentFixture<DailyworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
