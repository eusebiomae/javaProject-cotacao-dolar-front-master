import { parse, isValid, format } from 'date-fns';
import { Component, OnInit } from '@angular/core';
import { CotacaoDolarService, Moeda } from './cotacaodolar.service';

export interface Cotacao {
  preco: number;
  data: string;
  hora: string;
  diferenca?: number;
  precoTexto?: string;
  dataTexto?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cotacaoAtual = 0;
  cotacaoPorPeriodoLista: Cotacao[] = [];

  constructor(
    private cotacaoDolarService: CotacaoDolarService,
  ) {}


  ngOnInit(): void {
    this.cotacaoDolarService.getCotacaoAtual().subscribe((moedas: Moeda[]) => {
      if (moedas.length > 0) {
        this.cotacaoAtual = moedas[0].preco;
      }
    });
  }

  public getCotacaoPorPeriodo(dataInicialString: string, dataFinalString: string): void {
    this.cotacaoPorPeriodoLista = [];

    const dataInicial = parse(dataInicialString, 'yyyy-MM-dd', new Date());
    const dataFinal = parse(dataFinalString, 'yyyy-MM-dd', new Date());

    if (!isValid(dataInicial) || !isValid(dataFinal)) {
      console.error('Data inválida fornecida.');
      return;
    }

    const dataInicialFormatted = format(dataInicial, 'MM-dd-yyyy');
    const dataFinalFormatted = format(dataFinal, 'MM-dd-yyyy');

    this.cotacaoDolarService.getCotacoesPeriodo(dataInicialFormatted, dataFinalFormatted)
      .subscribe((moedas: Moeda[]) => {
        this.cotacaoPorPeriodoLista = moedas.map((m) => ({
          ...m,
          diferenca: +(m.preco - this.cotacaoAtual).toFixed(2),
          precoTexto: `R$ ${m.preco.toFixed(2)}`,
          dataTexto: m.data
        }));
      });
  }

}
