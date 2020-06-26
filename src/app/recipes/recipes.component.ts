import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from '../servicess/recipe.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  subscription:Subscription

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }

    //On initialization of the component. This will subscribe to the recipe-item emitted event



}
