import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsMoreComponent } from './readings-more.component';

describe('ReadingsMoreComponent', () => {
  let component: ReadingsMoreComponent;
  let fixture: ComponentFixture<ReadingsMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingsMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
