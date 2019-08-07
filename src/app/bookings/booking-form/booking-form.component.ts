import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormCleanerService } from 'src/app/shared/form-cleaner.service';
import { MatSlideToggle } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  public bookingsForm: FormGroup;
  public options = ['Hello', 'Fake', 'Data'];

  constructor(private snackBar: MatSnackBar, private formCleaner: FormCleanerService) { }

  ngOnInit() {
    this.bookingsForm = new FormGroup({
      bookingType: new FormControl(1, Validators.required),
      clientReference: new FormControl('', Validators.required),
      tag: new FormControl(''),
      clientBooker: new FormControl('', Validators.required),
      clientLabel: new FormControl(''),
      transitLabel: new FormControl('', Validators.required),
      paimentType: new FormControl(1, Validators.required),
      internalReference: new FormControl(''),
      externalReference: new FormControl(''),
      codeOne: new FormControl({value: '', disabled: true}),
      codeTwo: new FormControl({value: '', disabled: true}),
      codeAlpha: new FormControl({value: '', disabled: true}),
      codeBravo: new FormControl({value: '', disabled: true}),
      documents: new FormControl(''),
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

  toggleIda(toggle: MatSlideToggle): void {
    const siblingInputs = [this.bookingsForm.get('codeOne'), this.bookingsForm.get('codeTwo')];
    this.toggleHelper(toggle, siblingInputs);
  }

  toggleIdb(toggle: MatSlideToggle): void {
    const siblingInputs = [this.bookingsForm.get('codeAlpha'), this.bookingsForm.get('codeBravo')];
    this.toggleHelper(toggle, siblingInputs);
  }

  private toggleHelper(toggle: MatSlideToggle, ...selectedInputs): void {
    if (toggle.checked) {
      selectedInputs[0].forEach(input => input.enable());
    } else {
      selectedInputs[0].forEach(input => input.disable());
    }
  }
}
