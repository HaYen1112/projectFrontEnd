import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastnewMenuComponent } from './lastnew-menu.component';

describe('LastnewMenuComponent', () => {
  let component: LastnewMenuComponent;
  let fixture: ComponentFixture<LastnewMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastnewMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastnewMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
