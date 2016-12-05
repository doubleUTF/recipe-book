import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[];
  dummy_recipe = new Recipe('Dummy','Dummy','../../assets/elaicheesecake.png');
  constructor() { }

  ngOnInit() {
  }

}
