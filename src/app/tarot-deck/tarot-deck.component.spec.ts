import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotDeckComponent } from './tarot-deck.component';

describe('TarotDeckComponent', () => {
  let component: TarotDeckComponent;
  let fixture: ComponentFixture<TarotDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarotDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarotDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
