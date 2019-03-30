import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagerepairComponent } from './damagerepair.component';

describe('DamagerepairComponent', () => {
  let component: DamagerepairComponent;
  let fixture: ComponentFixture<DamagerepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagerepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagerepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
