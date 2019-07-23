import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingToolbarComponent } from './booking-toolbar.component';

describe('BookingToolbarComponent', () => {
  let component: BookingToolbarComponent;
  let fixture: ComponentFixture<BookingToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
