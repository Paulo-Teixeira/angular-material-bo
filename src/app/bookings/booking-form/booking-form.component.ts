import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormCleanerService } from 'src/app/shared/form-cleaner.service';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  bookingsForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private formCleaner: FormCleanerService) { }

  ngOnInit() {
    this.bookingsForm = new FormGroup({
      bookingType: new FormControl(1, Validators.required),
      clientReference: new FormControl('', Validators.required),
      tag: new FormControl(''),
      clientBooker: new FormControl('', Validators.required),
      //clientBooker: new FormControl({value: '', disabled: true}, Validators.required),
      clientLabel: new FormControl(''),
      transitLabel: new FormControl('', Validators.required),
      paimentType: new FormControl('A', Validators.required),
      internalReference: new FormControl(''),
      externalReference: new FormControl(''),
      codeOne: new FormControl(''),
      codeTwo: new FormControl(''),
      codeAlpha: new FormControl(''),
      codeBravo: new FormControl(''),
      documents: new FormControl('')
    });
  }

  onSubmit(formDirective: any): void {
    if (this.bookingsForm.valid) {
      const lastSubmitedBookingType: number = this.bookingsForm.value.bookingType;
      
      console.log('Form submited', this.formCleaner.trim(this.bookingsForm.value));

      this.snackBar.open('Booking created', 'Close', {
        duration: 4000,
      });

      // Uses form directive to reset Material input errors after form submission
      formDirective.resetForm();
      
      // Sets de default value of the radio button to the last value submited before form reset
      this.bookingsForm.patchValue({bookingType: lastSubmitedBookingType});
    }
  }
}
