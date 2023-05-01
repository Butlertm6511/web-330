// javascript import statements to add RequiredField, FloatField, FloatMinField, and FloatMaxField
import { RequiredField } from './required-field.js';

import { FloatField } from './float-field.js';

import { FloatMinField } from './float-min-field.js';

import { FloatMaxField } from './float-max-field.js';


export class FieldValidator {
    validators = [];
    messages = [];
  
    constructor(name, field) {
      this.name = name;
      this.field = field;
    }
  
    addRequiredField() {
      this.validators.push(new RequiredField(this.name, this.field));
    }
  
    addRequiredFloatField() {
      this.validators.push(new FloatField(this.name, this.field));
    }
  
    addFloatMinField(min) {
      this.validators.push(new FloatMinField(this.name, this.field, min));
    }
  
    addFloatMaxField(max) {
      this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
  
    validate() {
      let isValid = true;
  
      for (const validator of this.validators) {
        if (!validator.validate()) {
          this.messages.push(validator.getMessage());
          isValid = false;
        }
      }
  
      return isValid;
    }
  }
  
  
  
