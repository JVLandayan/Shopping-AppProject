import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from '../servicess/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe) => {
        //Catches the data emited
        this.selectedRecipe = recipe
         //Replaces selectedRecipe with the data that has been emitted
      }
    )
  }
    //On initialization of the component. This will subscribe to the recipe-item emitted event



}
