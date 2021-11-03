import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public fullHeart: string = "/assets/coracao_cheio.png";
  public emptyHeart: string = "/assets/coracao_vazio.png";

}
