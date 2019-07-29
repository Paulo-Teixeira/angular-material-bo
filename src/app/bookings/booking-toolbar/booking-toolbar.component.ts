import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-booking-toolbar',
  templateUrl: './booking-toolbar.component.html',
  styleUrls: ['./booking-toolbar.component.scss']
})
export class BookingToolbarComponent {

  // Form component sends form validity information
  @Input() isFormValid: boolean;

  // Sens click event to form component to validate de form
  @Output() formSubmited = new EventEmitter();

  constructor() { }

  submitForm() {
    this.formSubmited.emit();
  }

}
