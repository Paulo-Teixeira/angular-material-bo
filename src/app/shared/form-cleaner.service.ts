import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class FormCleanerService {

  constructor() { }

  // Removes whitespace from text inputs in a form
  trim(formData: FormGroup): object {
    let trimmedFormData: object = {};

    for (let input in formData) {

      // Check for input strings only 
      if (typeof formData[input] === 'string') {
        trimmedFormData[input] = formData[input].trim();
      }
    }
    return {...formData, ...trimmedFormData};
  }
}
