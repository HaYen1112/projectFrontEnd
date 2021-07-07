import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastnewBodyReadingLeftComponent } from './lastnew-body-reading-left.component';

describe('LastnewBodyReadingLeftComponent', () => {
  let component: LastnewBodyReadingLeftComponent;
  let fixture: ComponentFixture<LastnewBodyReadingLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastnewBodyReadingLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastnewBodyReadingLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
