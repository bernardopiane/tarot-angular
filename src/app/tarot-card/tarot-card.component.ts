import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { TarotDeckComponent } from '../tarot-deck/tarot-deck.component';

@Component({
  selector: 'app-tarot-card',
  templateUrl: './tarot-card.component.html',
  styleUrls: ['./tarot-card.component.scss'],
})
export class TarotCardComponent implements OnInit {
  @Input() card: any;

  // @Input imageUrl from parent component
  @Input() imagesUrl: any;

  @Input() imageBackCard: any;

  @Input() hasChoosenCard: boolean = false;

  @Output('setHasChoosenCard') setHasChoosenCard: EventEmitter<any> =
    new EventEmitter();

  showBack: boolean = false;

  constructor(private el: ElementRef, private dialog: MatDialog) {}

  ngOnInit(): void {}

  public flipCard() {
    // If the card flipped, show the card details on a modal window
    if (!this.showBack) {
      this.dialog.open(CardDetailComponent, {
        data: {
          card: this.card,
          imagesUrl: this.imagesUrl,
        },
      });
    }
    // Allows only one card to be selected
    else if (this.hasChoosenCard) {
      alert('You have already choosen a card');
    }
    // If the card is not flipped, flip it
    else {
      this.setHasChoosenCard.emit(true);

      // Select the class card-image
      const cardImage = this.el.nativeElement.querySelector('.mat-card');
      cardImage.classList.toggle('flip');
      this.showBack = !this.showBack;
    }
  }

  // Set the element classlist to flip
  public showBackCard() {
    const cardImage = this.el.nativeElement.querySelector('.mat-card');
    cardImage.classList.add('flip');
    this.showBack = true;
  }
}
