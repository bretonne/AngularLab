import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg')

  ];

  onRecipeSelected(recipe:Recipe)
  {
    this.recipeWasSelected.emit(recipe)
  }

  constructor() { }

  ngOnInit() {
  }

}
