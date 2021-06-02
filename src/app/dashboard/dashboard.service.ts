import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/model/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'http://localhost:8080/bootcamp'

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]>{
    /* vamos criar uma variável com nosso URL.
    Resumidamente, var diferencia de let ou const por não respeitar o escopo de onde se encontra
    assim, um var foo dentro de um if é visto fora dele, mas um let ou const foo não é visto por fora.
    -- Aqui usamos também uma String interpolation, oq vem dentro do ${} é uma variável, definida acima
    e acrescentamos um path final para essa função*/
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}
