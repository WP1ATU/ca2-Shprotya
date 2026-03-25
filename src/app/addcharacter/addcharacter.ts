import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itemsapiservice } from '../itemsapiservice';

@Component({
  selector: 'app-addcharacter',
  imports: [FormsModule],
  templateUrl: './addcharacter.html',
  styleUrl: './addcharacter.css',
})
export class Addcharacter {
  private _service = inject(Itemsapiservice);

  name = '';
  role = '';
  element = '';
  img = '';
  rarity = '';
  region = '';

  addItem() {
    this._service.addItem(this.name, this.role, this.element, this.img, this.rarity, this.region);
  }
}