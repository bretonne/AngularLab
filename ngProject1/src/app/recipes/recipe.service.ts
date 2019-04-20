import { Recipe } from './recipes-list/recipe.model';

export class RecipeService {
 
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'),
        new Recipe('A Test Recipe2 ', 'This is a test 2', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg')
      ];

    getRecipes()
    {
        return this.recipes.slice();
    }
}