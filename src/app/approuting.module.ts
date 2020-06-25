import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRouting : Routes = [

  {path:'', redirectTo:'/recipes', pathMatch:'full'},
  {path:'recipes',component:RecipesComponent, children:[
  {path:'', component:RecipeStartComponent},
  {path:'new', component:RecipeEditComponent},
  {path:':id', component:RecipeDetailComponent},
  {path:':id/edit', component:RecipeEditComponent},

  ]},
  {path:'shopping-list', component:ShoppingListComponent, children:[
    {path:'shopping-edit', component:ShoppingEditComponent}
  ]}

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouting)
  ],
  exports: [
    RouterModule
  ]
})



export class ApproutingModule { }
