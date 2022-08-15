import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/assets/interface';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
  @Input() card: any
  constructor() { }

  card_tags: string = ''

  ngOnInit(): void {
    // console.log(this.card)
    if (this.card.tags.length > 0)
      this.card_tags = '#' + this.card.tags.reduce((x: string, y: string) => x + ' #' + y)
  }

}
