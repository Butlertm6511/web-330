
// creates a float min field validator
export class FloatMinField {
    constructor(name, field, min) {
      this.name = name;
      this.field = field;
      this.min = min;
    }
  
    validate() {
      const parsedValue = parseFloat(this.field);
  
      // Returns true if the value is greater than the min parameter, false otherwise
      return !isNaN(parsedValue) && parsedValue > this.min;
    }

    /* creates a function that returns a string message that return a string if user enter in a 
    number that more the the min number*/
  
    getMessage() {
      return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }
  }
  
    

