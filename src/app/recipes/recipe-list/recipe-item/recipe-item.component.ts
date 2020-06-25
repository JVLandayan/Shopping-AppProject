import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/servicess/recipe.service';
import { LoggingServiceService } from 'src/app/logging-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() id:number
  //Data = for loop then binded the data through [recipe]="recipeEl"


  constructor(private recipeService: RecipeService,private route: ActivatedRoute, router: Router ) { }

  ngOnInit() {

  }


  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }
  //Method that calls the service that emits -> recipes.component.ts
  //When selected. the data would be emitted to recipes component

}
