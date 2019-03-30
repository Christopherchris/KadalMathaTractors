import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherexpenseComponent } from './otherexpense.component';

describe('OtherexpenseComponent', () => {
  let component: OtherexpenseComponent;
  let fixture: ComponentFixture<OtherexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
