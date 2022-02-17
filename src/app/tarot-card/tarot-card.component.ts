import { Component, ElementRef, Input, OnInit } from '@angular/core';

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

  showBack: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  public flipCard() {
    // Select the class card-image
    const cardImage = this.el.nativeElement.querySelector('.mat-card');
    cardImage.classList.toggle('flip');
  }

  // Set the element classlist to flip
  public showBackCard() {
    const cardImage = this.el.nativeElement.querySelector('.mat-card');
    cardImage.classList.add('flip');
  }
}
