import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrLiuComponent } from './dr-liu.component';

describe('DrLiuComponent', () => {
  let component: DrLiuComponent;
  let fixture: ComponentFixture<DrLiuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrLiuComponent]
    });
    fixture = TestBed.createComponent(DrLiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
