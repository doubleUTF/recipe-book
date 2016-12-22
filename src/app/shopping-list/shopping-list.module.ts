import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditorComponent } from './shopping-list-editor.component';
import {FormsModule} from '@angular/forms';
import {shoppingListRouting} from './shopping-list.routing';

@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingListEditorComponent,
  ],
  imports:[
    SharedModule,
    FormsModule,
    shoppingListRouting]
})

export class ShoppingListModule {}
