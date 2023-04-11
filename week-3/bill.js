/*
    Title:Restaurant App
    Author: Professor Krasso
    Date:3/27/2023
    Modified: TiaNiecia Mosley
    Description: Exporting the Bill class. Class used to create array of values added by pushing object on and adding price to the total 
                    
 */   

export class Bill{

    constructor()
    {
        this.beverages = [];
        this.appetizers = [];
        this.mainCourses = [];
        this.desserts = [];
    }
   


addBeverage(beverage)
{
    this.beverages.push(beverage);
}


addAppetizer(appetizer)
{
    this.appetizers.push(appetizer);
}


addMainCourse(mainCourse)
{
    this.mainCourses.push(mainCourse);
}


addDessert(dessert)
{
    this.desserts.push(dessert);
}

getTotal(){
    let total = 0;

    this.beverages.forEach(function(beverage){
        total += parseFloat(beverage.price);
    });

    this.appetizers.forEach(function(appetizer) 
        {total += parseFloat(appetizer.price);
    });

    this.mainCourses.forEach(function(mainCourse){
        total += parseFloat(mainCourse.price) 
    });
    this.desserts.forEach(function (dessert){
        total += parseFloat(dessert.price)
    });

    return total;
}  

}