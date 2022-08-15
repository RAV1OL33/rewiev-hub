import { Injectable } from '@angular/core';
import { BulkData } from 'src/assets/bulk-data';
import { ICard } from 'src/assets/interface';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  cards = BulkData


  constructor() { }

  getCardList(){
    return this.cards
  }
}
