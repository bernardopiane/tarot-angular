import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotCardComponent } from './tarot-card.component';

describe('TarotCardComponent', () => {
  let component: TarotCardComponent;
  let fixture: ComponentFixture<TarotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarotCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
