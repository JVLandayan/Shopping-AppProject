import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;


  //Sends the data from child to parent
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  //Method that emits the data
  onSelected() {
    this.recipeSelected.emit();
  }

}
