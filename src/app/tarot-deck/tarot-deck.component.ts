import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
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

  hasChoosenCard: boolean = false;

  setHasChoosenCard(Choosen: boolean) {
    this.hasChoosenCard = Choosen;
  }

  // Selects the cards from the apiData.cards array
  @ViewChildren(TarotCardComponent) tarotCardList:
    | QueryList<TarotCardComponent>
    | undefined;

  constructor(private dataService: DataService, private el: ElementRef) {}

  // Fetch data from the api on init
  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.apiData = data;
    });
  }

  // Shuffle items from apiData.cards array
  public shuffleCards() {
    // Run flipCard function on each card
    this.setHasChoosenCard(false);
    this.tarotCardList?.forEach((card) => {
      card.showBackCard();
    });

    // Wait 1 second before shuffling the cards
    setTimeout(() => {
      this.apiData?.cards.sort(() => Math.random() - 0.5);
    }, 1000);
  }
}
