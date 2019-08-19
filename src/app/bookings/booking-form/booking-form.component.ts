import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  bookingsForm: FormGroup;
  options: string[];
  isClientBooking: boolean = true;
  filteredOptions: Observable<string[]>;
  clientBookingInputs: string[] =[
    'clientReference',
    'clientBooker',
    'clientLabel',
    'transitLabel',
    'paymentType',
    'internalReference',
    'documents',
  ];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.options = ['Hello', 'Fake', 'Data']; // should comme from API service
    this.formInit();
  }

  formInit() {
    this.bookingsForm = new FormGroup({
      bookingType: new FormControl(1, Validators.required),
      clientReference: new FormControl('', Validators.required),
      tag: new FormControl(''),
      clientBooker: new FormControl('', Validators.required),
      clientLabel: new FormControl(''),
      transitLabel: new FormControl('', Validators.required),
      paymentType: new FormControl(1, Validators.required),
      internalReference: new FormControl(''),
      externalReference: new FormControl(''),
      codeOne: new FormControl({value: '', disabled: true}, Validators.required),
      codeTwo: new FormControl({value: '', disabled: true}, Validators.required),
      codeAlpha: new FormControl({value: '', disabled: true}, Validators.required),
      codeBravo: new FormControl({value: '', disabled: true}, Validators.required),
      documents: new FormControl('', Validators.required),
    });
  }

  getClientData() {
    this.filteredOptions = this.bookingsForm.controls.tag.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value = ''))
      );
  }

  onSubmit(): void {
    if (this.bookingsForm.valid) {
      const lastSubmitedBookingType: number = this.bookingsForm.value.bookingType;
      const lastSubmitedPaymentType: number = this.bookingsForm.value.paymentType;
      console.log('Form submited', this._trim(this.bookingsForm.value));

      this.snackBar.open('Booking created', 'Close', {
        duration: 4000,
      });

      this.bookingsForm.reset();
      
      // Sets de default value of the radio button to the last value submited before form reset
      this.bookingsForm.patchValue({bookingType: lastSubmitedBookingType});
      this.bookingsForm.patchValue({paymentType: lastSubmitedPaymentType});
    }
  }

  toggleIda(toggle: MatSlideToggle): void {
    const siblingInputs = [
      this.bookingsForm.get('codeOne'),
      this.bookingsForm.get('codeTwo')
    ];
    this._toggleHelper(toggle, siblingInputs);
  }

  toggleIdb(toggle: MatSlideToggle): void {
    const siblingInputs = [
      this.bookingsForm.get('codeAlpha'),
      this.bookingsForm.get('codeBravo')
    ];
    this._toggleHelper(toggle, siblingInputs);
  }

  private _toggleHelper(toggle: MatSlideToggle, ...selectedInputs): void {
    if (toggle.checked) {
      selectedInputs[0]
        .forEach(input => input.enable());
    } else {
      selectedInputs[0]
        .forEach(input => input.disable());
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options
      .filter(
        option => option
          .toLowerCase()
          .includes(filterValue)
      );
  }

  private _trim(formData: FormGroup): object {
    const trimmedFormData: object = {};

    for (let input in formData) {
      // Check for input strings only 
      if (typeof formData[input] === 'string') {
        trimmedFormData[input] = formData[input].trim();
      }
    }
    return {...formData, ...trimmedFormData};
  }

  toggleInputsByTypeOfBooking(event: MatButtonToggleGroup): void {
    const bookingType = event.value;

    if (bookingType === 1) {
      this.isClientBooking = true;
      this._enableInputsByBookingType();
    } else {
      this.isClientBooking = false;
      this._disableInputsByBookingType();
    }
  }

  private _disableInputsByBookingType() {
    this.clientBookingInputs.forEach(input => this.bookingsForm.get(input).disable());
  }

  private _enableInputsByBookingType() {
    this.clientBookingInputs.forEach(input => this.bookingsForm.get(input).enable());
  }

  // Example on how to go about to auto fill other form inputs after autocomplete selection
  populateForm(e) {
    // TODO DRY this
    this.bookingsForm.patchValue({clientReference: e.option.value});
    this.bookingsForm.patchValue({clientBooker: e.option.value});
    this.bookingsForm.patchValue({transitLabel: e.option.value});
    this.bookingsForm.patchValue({documents: e.option.value});
  }
  
}
