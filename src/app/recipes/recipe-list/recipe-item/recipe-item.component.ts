import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  //Sends the data from child to parent


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }


  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }
  //Method that calls the service that emits -> recipes.component.ts

}
