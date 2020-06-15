import { Injectable, EventEmitter,Output } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>() //Type that will pass on is an Ingredients Array
  private ingredientsArr: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients () {
    return this.ingredientsArr.slice()
    //Return ingredients but it is only a copy of it through slice method
  }
  constructor() { }

  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredientsArr.push(ingredient);
  }

  addIngredient (ingredient: Ingredient) {
    this.ingredientsArr.push(ingredient)
    this.ingredientsChanged.emit(this.ingredientsArr.slice())//The data that will be emiited would be the copy of the array *see line 8
  }

  addIngredientsss(ingredients: Ingredient[]) {
    this.ingredientsArr.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredientsArr.slice())
  }







}
