import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private slService: ShoppingListService) { }

  private recipesArr: Recipe[] = [
    new Recipe('A Test Recipe',
     'This is simply a test',
     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
     [
       new Ingredient('Meat',1),
       new Ingredient('French Fries', 20)
     ]),
    new Recipe('Another Test Recipe',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Bread',2),
      new Ingredient('Meat',30)
    ])
  ];

  getRecipe () {
    return this.recipesArr.slice()

  }

  recipeSelected = new EventEmitter<Recipe>()

  addIngredientsToShopping (ingredients: Ingredient[]) {
    this.slService.addIngredientsss(ingredients)
  }

}
