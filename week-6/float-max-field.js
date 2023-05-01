
// creates a class named FloatMaxField with 3 parameters (name, field, max)
export class FloatMaxField {
    constructor(name, field, max) {
      this.name = name;
      this.field = field;
      this.max = max;
    }
  
    // Returns true if the value is less than the max parameter, false otherwise
    validate() {
      const parsedValue = parseFloat(this.field);
      
    
      return !isNaN(parsedValue) && parsedValue < this.max;
    }
  
    // Returns the error message that name must be less than max
    getMessage() {
      return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
    }
  }
  