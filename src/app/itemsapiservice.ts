import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { signal } from '@angular/core';
import { CharacterDetails } from './models/characterdetails.interface';

@Injectable({
  providedIn: 'root',
})
export class Itemsapiservice {
  private _http = inject(HttpClient);
  private _apiUrl = 'http://localhost:5050/genshin';

  public characters = signal<CharacterDetails[]>([]);

  // return all cars from database
  getItems() {
    const url = this._apiUrl;
    this._http.get<CharacterDetails[]>(url)
      .subscribe(data => {
        this.characters.set(data);
      });
  }

  // add one character to database
  addItem(myName: string, myRole: string, myElement: string, myImage: string) {
    const url = this._apiUrl;
    let character = { name: myName, role: myRole, element: myElement, img: myImage };
    this._http.post<CharacterDetails[]>(url, character)
      .subscribe(() => {
        this.getItems();
      });
  }

  // delete character by id
  deleteItem(myId: string) {
    const url = this._apiUrl + '/' + myId;
    this._http.delete(url)
      .subscribe(data => {
        this.getItems();
      });
  }

}
