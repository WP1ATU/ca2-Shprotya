import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Itemsapiservice } from '../itemsapiservice';

@Component({
  selector: 'app-listcharacters',
  imports: [CommonModule],
  templateUrl: './listcharacters.html',
  styleUrl: './listcharacters.css',
})
export class Listcharacters {
  private _itemsApiService = inject(Itemsapiservice);
  characters = this._itemsApiService.characters;

  constructor() {
    this._itemsApiService.getItems();
  }

  delete(id: any) {
    this._itemsApiService.deleteItem(id);
  }
}