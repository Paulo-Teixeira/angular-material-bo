import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  bookingsForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.bookingsForm = new FormGroup({
      bookingType: new FormControl(1, Validators.required),
      clientBooker: new FormControl('', Validators.required),
      clientReference: new FormControl('', Validators.required),
    });
  }

  onSubmit(formDirective) {
    if (this.bookingsForm.valid) {
      console.log('Form submited', this.bookingsForm.value);

      // Uses form directive to reset Material input errors after form submission
      formDirective.resetForm();
      
      // Sets de default value of the radio button after form reset
      this.bookingsForm.patchValue({ bookingType: 1 });
    }
  }
}
