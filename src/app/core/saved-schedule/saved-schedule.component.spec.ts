import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedScheduleComponent } from './saved-schedule.component';

describe('SavedScheduleComponent', () => {
  let component: SavedScheduleComponent;
  let fixture: ComponentFixture<SavedScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedScheduleComponent]
    });
    fixture = TestBed.createComponent(SavedScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
