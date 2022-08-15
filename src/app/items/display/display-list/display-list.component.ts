import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ICard } from 'src/assets/interface';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss']
})
export class DisplayListComponent implements OnInit {

  cards_list: Array <ICard> = []

  constructor(private app_service: AppService) { }

  ngOnInit(): void {
    this.cards_list = this.app_service.getCardList()
  }


}
