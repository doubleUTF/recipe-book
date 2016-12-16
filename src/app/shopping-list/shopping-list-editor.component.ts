import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
})
export class ShoppingListEditorComponent implements OnInit {
  isAdd=true;
  item:Ingredient;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(ingredient: Ingredient){
    if (!this.isAdd){
      // Edit mode
    } else {
      this.item= new Ingredient(ingredient.name,ingredient.amount);
      this.sls.addItem(this.item);
    }
  }
}
