import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITEComponent } from './ite.component';

describe('ITEComponent', () => {
  let component: ITEComponent;
  let fixture: ComponentFixture<ITEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ITEComponent]
    });
    fixture = TestBed.createComponent(ITEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
