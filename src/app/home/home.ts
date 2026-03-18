import { Component } from '@angular/core';
import { Listcharacters} from '../listcharacters/listcharacters';
import { Addcharacter } from '../addcharacter/addcharacter';


@Component({
  selector: 'app-home',
  imports: [Listcharacters, Addcharacter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
