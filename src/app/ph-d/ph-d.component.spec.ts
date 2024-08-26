import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhDComponent } from './ph-d.component';

describe('PhDComponent', () => {
  let component: PhDComponent;
  let fixture: ComponentFixture<PhDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhDComponent]
    });
    fixture = TestBed.createComponent(PhDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
