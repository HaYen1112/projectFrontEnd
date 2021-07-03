import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastnewBodyReadingComponent } from './lastnew-body-reading.component';

describe('LastnewBodyReadingComponent', () => {
  let component: LastnewBodyReadingComponent;
  let fixture: ComponentFixture<LastnewBodyReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastnewBodyReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastnewBodyReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
