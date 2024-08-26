import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniFooterComponent } from './alumni-footer.component';

describe('AlumniFooterComponent', () => {
  let component: AlumniFooterComponent;
  let fixture: ComponentFixture<AlumniFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumniFooterComponent]
    });
    fixture = TestBed.createComponent(AlumniFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
