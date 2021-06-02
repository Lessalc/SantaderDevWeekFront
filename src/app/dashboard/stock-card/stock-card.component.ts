import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/model/stock-model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input()
  stock_input = new Stock();

  constructor() { }

  ngOnInit(): void { }

  get variation(): string{  //método : variável que retorna
    const localizedVariationString = this.stock_input.variation.toLocaleString();
    const prefix = this.stock_input.variation > 0 ? '+' : '-' //if ternário: lógica ? <se positivo> : <se negativo>
    return `${prefix} ${localizedVariationString.replace('-', '')}%`;
  }

}
