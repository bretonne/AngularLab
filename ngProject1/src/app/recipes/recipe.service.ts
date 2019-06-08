import { Subject } from 'rxjs';
import { Recipe } from './recipes-list/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
          'Tasty Schnitzel',
          'Super Tasty Schnitzel - just awesome!',
          'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
          [
            new Ingredient('Spinash', 1),
            new Ingredient('Onions', 1)
          ]),
        new Recipe(
          'Quinua Kale Salad',
          'Super healthy salad',
          'http://theleancleaneatingmachine.com/wp-content/uploads/2015/01/Quinoa-and-Kale-Salad-with-Lemon-Vinaigrette-2.jpg',
          [
            new Ingredient('Quinoa', 10),
            new Ingredient('Kale', 1)
          ])
      ];

      getReceipe(id: number) {
        return this.recipes[id];
      }

      getRecipes() {
        return this.recipes.slice();
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}
