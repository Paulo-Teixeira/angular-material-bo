import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingsComponent } from './bookings.component';
import { BookingToolbarComponent } from './booking-toolbar/booking-toolbar.component';
import { BookingFormComponent } from './booking-form/booking-form.component';


const routes: Routes = [
  {
    path: '',
    component: BookingsComponent
  },
  {
    path: 'toolbar',
    component: BookingToolbarComponent
  },
  {
    path: 'form',
    component: BookingFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
