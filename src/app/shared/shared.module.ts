import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { FormCleanerService } from './form-cleaner.service';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  providers: [FormCleanerService]
})
export class SharedModule { }
