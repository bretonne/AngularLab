import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes-list/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input()
  recipe: Recipe;

  constructor(private shoopingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.shoopingListService.addIngredients(this.recipe.ingredients);
  }

}
