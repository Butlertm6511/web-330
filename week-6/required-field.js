// Makes a class named RequiredField with 2 parameters(name and field) 

export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
/* Function named validate that will check if this.field is a string and return true*/
    validate() {

        return Boolean(this.field);
    }

// Function named getMessage that returns the string message "<name> is required field"
    getMessage() {
        return `${this.name} is required field`;
    
}

}

