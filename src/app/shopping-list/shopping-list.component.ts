import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../servicess/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]= []
  constructor(private shoppinglistService : ShoppingListService) { }


  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients() //Copy of the first array
    //Assigning ingredients to whatever the service method returns
    this.shoppinglistService.ingredientsChanged
    .subscribe((ingredients: Ingredient[]) =>{
      this.ingredients = ingredients
    }) //Copy of the array whenever an event is emitted
  }



}
