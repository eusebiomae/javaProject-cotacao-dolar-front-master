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
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})

export class CotacaoComponent implements OnInit {
  cotacaoAtual = 0;
    cotacaoPorPeriodoLista: Cotacao[] = [];
    apenasMenores = false;
    erroMensagem: string = '';

    constructor(
      private cotacaoDolarService: CotacaoDolarService,
    ) {}

    ngOnInit(): void {
      const hoje = new Date();
      const primeiroDiaMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);

      (document.getElementById('dataInicial') as HTMLInputElement).value = format(primeiroDiaMes, 'yyyy-MM-dd');
      (document.getElementById('dataFinal') as HTMLInputElement).value = format(hoje, 'yyyy-MM-dd');

      this.cotacaoDolarService.getCotacaoAtual().subscribe((moedas: Moeda[]) => {
        if (moedas.length > 0) {
          this.cotacaoAtual = moedas[0].preco;
        }
      });
    }

    public getCotacaoPorPeriodo(dataInicialString: string, dataFinalString: string): void {
      this.cotacaoPorPeriodoLista = [];
      this.erroMensagem = '';

      const dataInicial = parse(dataInicialString, 'yyyy-MM-dd', new Date());
      const dataFinal = parse(dataFinalString, 'yyyy-MM-dd', new Date());

      if (!isValid(dataInicial) || !isValid(dataFinal)) {
        this.erroMensagem = 'Data inválida fornecida.';
        return;
      }

      if (dataInicial > dataFinal) {
        this.erroMensagem = 'A data inicial não pode ser maior que a data final.';
        return;
      }

      const hoje = new Date();
      if (dataInicial > hoje || dataFinal > hoje) {
        this.erroMensagem = 'Datas não podem ser no futuro.';
        return;
      }

      const dataInicialFormatted = format(dataInicial, 'MM-dd-yyyy');
      const dataFinalFormatted = format(dataFinal, 'MM-dd-yyyy');

      const request$ = this.apenasMenores
        ? this.cotacaoDolarService.getCotacoesMenoresPeriodo(dataInicialFormatted, dataFinalFormatted)
        : this.cotacaoDolarService.getCotacoesPeriodo(dataInicialFormatted, dataFinalFormatted);

      request$.subscribe((moedas: Moeda[]) => {
        this.cotacaoPorPeriodoLista = moedas.map((m) => ({
          ...m,
          diferenca: +(m.preco - this.cotacaoAtual).toFixed(2),
          precoTexto: `R$ ${m.preco.toFixed(2)}`,
          dataTexto: m.data
        }));
      });
    }

}

