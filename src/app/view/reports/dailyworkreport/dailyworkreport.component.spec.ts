import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyworkreportComponent } from './dailyworkreport.component';

describe('DailyworkreportComponent', () => {
  let component: DailyworkreportComponent;
  let fixture: ComponentFixture<DailyworkreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyworkreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyworkreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
