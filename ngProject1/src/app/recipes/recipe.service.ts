import { Recipe } from './recipes-list/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

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
          'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
          [
            new Ingredient('Quinoa', 10),
            new Ingredient('Kale', 1)
          ])
      ];

    getRecipes()
    {
        return this.recipes.slice();
    }
}
