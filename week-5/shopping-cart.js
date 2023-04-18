
/* Creates a ShoppingCart class that will hold a array of product. A count function to count the items. A add function that adds products to the array, 
and a find function to find products in a array*/
export class ShoppingCart{
    constructor(){
        this.products =[];
    }
    
    count(){
        return this.products.length;
    }
    add(product){
        this.products.push(product);
    }

    find(){
        return this.products;
    }


    //  used to iterator over objects in the products and pause when item is found.
    *[Symbol.iterator](){
        for(const product of this.products){
        yield product;
    }

}

}


