import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DataService } from '../data.service';
import { TarotCardComponent } from '../tarot-card/tarot-card.component';

@Component({
  selector: 'app-tarot-deck',
  templateUrl: './tarot-deck.component.html',
  styleUrls: ['./tarot-deck.component.scss'],
})
export class TarotDeckComponent implements OnInit {
  apiData: any;

  @ViewChildren(TarotCardComponent) tarotCardList:
    | QueryList<TarotCardComponent>
    | undefined;

  constructor(private dataService: DataService, private el: ElementRef) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.apiData = data;
      console.log('this.cards', this.apiData);
    });
  }

  // Shuffle items from apiData.cards array
  public shuffleCards() {
    // Run flipCard function on each card
    this.tarotCardList?.forEach((card) => {
      card.showBackCard();
    });

    this.apiData?.cards.sort(() => Math.random() - 0.5);
  }
}
