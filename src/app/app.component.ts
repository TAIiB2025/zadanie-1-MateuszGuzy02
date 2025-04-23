import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Produkt } from '../models/produkt.class';
import { ProduktComponent } from './produkt/produkt.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProduktComponent, KoszykComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Koszyk Zakupowy';

  produkty: Produkt[] = [
    new Produkt('Produkt 1', 20.00, new Date('2025-04-23'), true, 0),
    new Produkt('Produkt 2', 30.00, new Date('2025-04-23'), false, 0),
    new Produkt('Produkt 3', 40.00, new Date('2025-04-23'), true, 0),
    new Produkt('Produkt 4', 50.00, new Date('2025-04-23'), false, 0),
    new Produkt('Produkt 5', 60.00, new Date('2025-04-23'), true, 0)
  ];
 
  wartoscKoszyka: number = 0;
  pokazProdukty: boolean = true;

  dodajDoKoszyka(produkt: Produkt) : void {
    this.wartoscKoszyka += produkt.cena;
    produkt.liczbaSztuk++;
  }

  toggleProdukty() : void {
    this.pokazProdukty = !this.pokazProdukty;
  }

  wyczyscKoszyk() : void {
    this.wartoscKoszyka = 0;
    this.produkty.forEach(produkt => {
      produkt.liczbaSztuk = 0;
    });
  }
}
