import { Injectable} from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';


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

  //recipe-list.component.ts
  //Initializes the array via onInit
  getRecipe () {
    return this.recipesArr.slice()
  }

  getRecipes(id:number) {
    return this.recipesArr[id]
  }

  //recipe-detail.component.ts
  addIngredientsToShopping (ingredients: Ingredient[]) {
    this.slService.addIngredientsss(ingredients)
  //Shopping-list-service.ts
  }

  //recipe-item.component.ts
  recipeSelected = new Subject<Recipe>()


}
