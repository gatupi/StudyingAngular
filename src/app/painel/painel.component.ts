import { Component, OnInit } from '@angular/core';

// é necessário importar a classe também, dur...
import { Frase } from '../shared/frase.model';

import { FRASES, Sum } from './frases-mock';
/* import * as MockFrases from './frases-mock'; */

import { TentativasComponent } from '../tentativas/tentativas.component';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a frase:";
  public resposta: string;
  private currentPhraseIndex: number;

  constructor() {
    console.log(this);
    this.phraseIndex = 0;
  }

  ngOnInit() {
  }

  public proximaFrase() {
    this.phraseIndex = this.phraseIndex + 1;
  }

  public fraseAnterior() {
    this.phraseIndex = this.phraseIndex - 1;
  }

  public set phraseIndex(index: number) {
    let length: number = this.frases.length;
    this.currentPhraseIndex = index < 0 ? 0 : (index >= length ? length - 1 : index);
  }

  public get phraseIndex() : number {
    return this.currentPhraseIndex;
  }

  public atualizaResposta(resposta: Event) {
/*     this.resposta = resposta.target.value; // error
 */    this.resposta = (<HTMLInputElement>resposta.target).value;
    /* console.log(this.resposta + " (" + this.respostaCorreta + ")"); */
  }

  public get respostaCorreta() : boolean {
    let isCorrect: boolean = this.resposta == this.frases[this.phraseIndex].frasePtBr;
    if (isCorrect) {
      alert("Resposta Correta!");
      this.proximaFrase();
    }
    else
      alert("Resposta Errada!");
    // console.log(isCorrect);
    return isCorrect;
  }

  public SumOfSum(n1: number, n2: number) : number {

    let result: number = Sum(n1, n2) + Sum(n1, n2);

    console.log(result);

    return result;
  } // Não sei por que caralho isso aqui executa 4 vezes!

}