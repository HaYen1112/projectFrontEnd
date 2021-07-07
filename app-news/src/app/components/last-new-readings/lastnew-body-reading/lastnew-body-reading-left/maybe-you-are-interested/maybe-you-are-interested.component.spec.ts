import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaybeYouAreInterestedComponent } from './maybe-you-are-interested.component';

describe('MaybeYouAreInterestedComponent', () => {
  let component: MaybeYouAreInterestedComponent;
  let fixture: ComponentFixture<MaybeYouAreInterestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaybeYouAreInterestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaybeYouAreInterestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
