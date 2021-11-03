import { Component, OnInit, OnChanges } from '@angular/core';

// é necessário importar a classe também, dur...
import { Frase } from '../shared/frase.model';

import { FRASES, Sum } from './frases-mock';
/* import * as MockFrases from './frases-mock'; */

import { TentativasComponent } from '../tentativas/tentativas.component';
import { stringify } from 'querystring';

import { Heart, HeartTypes } from 'app/shared/heart.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnChanges {

  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a frase:";
  public resposta: string;
  private currentPhraseIndex: number;
  public progresso: number = 0;
  public coracoes: Heart[] = [];
  public corretas: boolean[] = [];
  public static readonly totalTentativas: number = 5;
  private tentativa: number = 0;

  constructor() {
    console.log("construtor");
    console.log(this);
    this.resposta = "";
    this.phraseIndex = 0;
    for (let i=0; i<this.frases.length; i++)
      this.corretas[i] = false;
    for (let i: number = 0; i< PainelComponent.totalTentativas; i++) {
      this.coracoes[i] = new Heart(HeartTypes.full);
    }
  }

  ngOnInit() {
    console.log("inicialização");
  }

  ngOnChanges() {
    console.log("mudança...");
  }

  public get tentativasRestantes(): number {
    let count = 0;
    for (let i: number = 0; i < this.coracoes.length; i++)
      if (this.coracoes[i].type == HeartTypes.full)
        count++;

    return count;
  }

  public get respondidas(): number {
    let count: number = 0;

    for (let i=0; i<this.corretas.length; i++)
      if (this.corretas[i])
        count++;

    return count;
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
    //console.log(resposta);
    /* console.log(this.resposta + " (" + this.respostaCorreta + ")"); */
  }

  public get respostaCorreta() : boolean {
    let isCorrect: boolean = this.resposta.toLowerCase() == this.frases[this.phraseIndex].frasePtBr.toLowerCase();
    if (isCorrect) {
      this.corretas[this.phraseIndex] = true;
      this.proximaFrase();
      this.progresso += (100 / this.frases.length);
      alert("Resposta Correta!\nProgresso: " + this.progresso.toFixed(1) + "%");
      if (Math.round(this.progresso) == 100)
        alert("Parabéns! Você acertou todas as questões!");
    }
    else {
      this.coracoes[this.tentativa].type = HeartTypes.empty;
      this.tentativa++;
      alert("Resposta Errada!");
      if (this.tentativa == PainelComponent.totalTentativas)
        alert("Fim de jogo!");
    }
    this.resposta = "";
    // console.log(isCorrect);
    return isCorrect;
  }

  public get isAnswered(): boolean {
    return this.corretas[this.phraseIndex];
  }

  public SumOfSum(n1: number, n2: number) : number {

    let result: number = Sum(n1, n2) + Sum(n1, n2);

    console.log(result);

    return result;
  } // Não sei por que caralho isso aqui executa 4 vezes!

}