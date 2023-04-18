import FoodModel from './food-model.js';

class CalorieConverter{
    static data = [
      {id: 1007, name: 'Egg', calories: 78},
      {id: 1008, name: 'Apple', calories: 95},
      {id: 1009, name: 'Hamburger', calories: 354},
      {id: 1010, name: 'Fries', calories: 400},
      {id: 1011, name: 'Banana', calories: 105},
      {id: 1012, name: 'soda', calories: 150}
    ];

static find(searchFood){
    return this.data.filter(food => food.name.toLowerCase().includes(searchFood));
    }
}

export default CalorieConverter;