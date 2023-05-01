
// Creates a FloatField class with 2 parameters (name,field)
export class FloatField {
    constructor(name, field) {
      this.name = name;
      this.field = field;
    }
  
    validate() {
      const parsedValue = parseFloat(this.field);
      const isNotValid = isNaN(parsedValue);
  
      // Returns true if the value can be parsed as a float, false otherwise
      return !isNotValid;
    }
  
    // returns  a string message  value must be a float value. You entered {this.field}float,
    getMessage() {
      return `${this.name} must be a float value. You entered ${this.field}`;
    }
  }
  
