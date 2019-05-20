import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes-list/recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input()
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
             private shoppingService: ShoppingListService,
            private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getReceipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }
}
