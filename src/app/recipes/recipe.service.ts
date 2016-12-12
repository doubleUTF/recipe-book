import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[]=[
    new Recipe('Uthapizza','Indian style pizza','../../assets/uthapizza.png', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Vadonut','Donut that starts with a V', '../../assets/vadonut.png', [])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}
