/*
    Title:Restaurant App
    Author: Professor Krasso
    Date:3/27/2023
    Modified: TiaNiecia Mosley
    Description: Import and export for modules to import Product class from product.js file. Setting Dessert class to be exported. Using super( )
                    to keep the parameters from Products.
*/

import { Product } from "./product.js";

export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name,price);
    }
}
