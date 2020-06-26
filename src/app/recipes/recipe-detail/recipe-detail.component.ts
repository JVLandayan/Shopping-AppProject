import { Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/servicess/recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number

  constructor(private recipeService : RecipeService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id']
      this.recipe = this.recipeService.getRecipes(this.id)
    })

  }
  editRecipe() {
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

  addIngredientsToShopping() {
    this.recipeService.addIngredientsToShopping(this.recipe.ingredients) //this.recipe.ingredients is an array so we should treat it as an array

  }
}
