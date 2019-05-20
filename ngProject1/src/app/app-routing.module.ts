import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full' },
//  {path: '', component: RecipesComponent },
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: ':id', component: RecipesDetailComponent}
    ]},
  {path: 'shoppingList', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
