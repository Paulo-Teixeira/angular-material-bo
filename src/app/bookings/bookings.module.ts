import { NgModule } from '@angular/core';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingComponent } from './booking/booking.component';
import { BookingToolbarComponent } from './booking-toolbar/booking-toolbar.component';
import { BookingFormComponent } from './booking-form/booking-form.component';


@NgModule({
  declarations: [
    BookingComponent,
    BookingToolbarComponent,
    BookingFormComponent,
  ],
  imports: [
    BookingsRoutingModule
  ],
})
export class BookingsModule { }
