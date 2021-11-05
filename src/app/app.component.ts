import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* title = 'app'; */

  public jogoEmAndamento: boolean = true;
  public readonly victoryMessage: string = "Parabéns!! Você acertou todas as questões! :D";
  public readonly defeatMessage: string = "Aaah... :( Sinto muito, você não conseguiu... Tente novamente!";
  public won: boolean = true;

  public endGame(tipo: string): void {
    console.log(tipo);
    this.jogoEmAndamento = false;
    this.won = tipo == 'victory' ? true : false;
  }
}
