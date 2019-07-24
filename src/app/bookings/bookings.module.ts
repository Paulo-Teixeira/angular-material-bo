import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { BookingToolbarComponent } from './booking-toolbar/booking-toolbar.component';
import { BookingFormComponent } from './booking-form/booking-form.component';


@NgModule({
  declarations: [
    BookingsComponent,
    BookingToolbarComponent,
    BookingFormComponent,
  ],
  imports: [
    BookingsRoutingModule,
    SharedModule
  ],
})
export class BookingsModule { }
