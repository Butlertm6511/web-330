import FoodModel from './food-model';

class CalorieConverter{
    static list = [
      new FoodModel(1007, Egg, 78),
      new FoodModel(1008, Apple, 95),
      new FoodModel(1009, Hamburger, 354),
      new FoodModel(1010, Fries, 400),
      new FoodModel(1011, Banana, 105),
      new FoodModel(1012, soda, 150)
    ];

static find(name){
    return CalorieConverter.list.filter(item=> item.name === name);
    }
}

export default CalorieConverter;