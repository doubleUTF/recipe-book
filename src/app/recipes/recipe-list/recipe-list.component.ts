import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Uthapizza','Indian style pizza','../../assets/uthapizza.png', []),
    new Recipe('Vadonut','Donut that starts with a V', '../../assets/vadonut.png', [])
  ];


  @Output() recipeSelected= new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
