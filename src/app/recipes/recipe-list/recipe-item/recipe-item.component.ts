import { Component, OnInit, Input} from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/servicess/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() id:number
  //Data = for loop then binded the data through [recipe]="recipeEl"


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }


  onSelected() {
    this.recipeService.recipeSelected.next(this.recipe)
  }
  //Method that calls the service that emits -> recipes.component.ts
  //When selected. the data would be emitted to recipes component

}
