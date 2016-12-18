import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
})
export class ShoppingListEditorComponent implements OnChanges {
  isAdd=true;
  @Input() item:Ingredient;
  @Output() cleared= new EventEmitter();

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes){
    if (changes.item.currentValue===null){
      this.isAdd=true;
    } else{
      this.isAdd=false;
    }
  }

  onSubmit(ingredient: Ingredient){
    let newIngredient= new Ingredient(ingredient.name,ingredient.amount);
    if (!this.isAdd){
      this.sls.saveItem(this.item,newIngredient);
    } else {
      this.sls.addItem(newIngredient);
    }
    this.item= newIngredient;
    this.onClear();
  }

  onDelete(){
    this.sls.deleteItem(this.item)
    this.onClear();
  }

  onClear(){
    this.item=null
    this.isAdd=true;
    this.cleared.emit(null);
  }
}
