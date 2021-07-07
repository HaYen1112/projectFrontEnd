import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastnewBodyReadingRightComponent } from './lastnew-body-reading-right.component';

describe('LastnewBodyReadingRightComponent', () => {
  let component: LastnewBodyReadingRightComponent;
  let fixture: ComponentFixture<LastnewBodyReadingRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastnewBodyReadingRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastnewBodyReadingRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
