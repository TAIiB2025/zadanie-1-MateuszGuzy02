import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produkt } from '../../models/produkt.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produkt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produkt.component.html',
  styleUrl: './produkt.component.css'
})

export class ProduktComponent {
  @Input() produkt!: Produkt
  @Output() dodajDoKoszyka = new EventEmitter<Produkt>();

  liczbaSztuk: number = 0;

  onDodajDoKoszyka() {
    this.liczbaSztuk++;
    this.dodajDoKoszyka.emit(this.produkt);
  }
}
