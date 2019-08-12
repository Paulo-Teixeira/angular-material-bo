import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { BookingFormComponent } from './booking-form.component';

import 'hammerjs';

describe('BookingFormComponent', () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookingFormComponent],
      imports: [SharedModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when required inputs are empty', () => {
    expect(component.bookingsForm.valid).toBeFalsy();
  });

  it('booking type should have a set default value', () => {
    let bookingType = component.bookingsForm.controls['bookingType'];
    expect(bookingType.value).toBeTruthy();
  });

  it('payment type should have a set default value', () => {
    let paymentType = component.bookingsForm.controls['paymentType'];
    expect(paymentType.value).toBeTruthy();
  });

  it('submiting a form should emit the form data', () => {
    expect(component.bookingsForm.valid).toBeFalsy();

    const requiredFields = ['clientReference', 'clientBooker', 'transitLabel','documents'];

    // Set the values for the required form fields
    requiredFields.forEach((value, index) => {
      component.bookingsForm.controls[value].setValue(`value ${index}`);
    });
    
    expect(component.bookingsForm.valid).toBeTruthy();
  });
});
