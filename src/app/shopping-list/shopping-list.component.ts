import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  items:Ingredient[]=[];
  selectedItem:Ingredient=null;
  constructor(private slc:ShoppingListService) { }

  ngOnInit() {
    this.items=this.slc.getItems();
  }

  onSelectItem(item:Ingredient){
    this.selectedItem=item;
  }

  onCleared(){
    this.selectedItem=null;
    console.log('clear event received')
  }
}
