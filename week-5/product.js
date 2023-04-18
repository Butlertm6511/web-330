
// exports the Product class to be used throughout program. Make a class for product with a name, price, and id.
export class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.id = this.randomIdValue();
    }
    // creates a random id and turn it into a string.
    randomIdValue(){
        return Math.random().toString(16).slice(2);
    }

}

