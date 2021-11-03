import { Component, OnInit, Input } from '@angular/core';
import { Heart, HeartTypes } from 'app/shared/heart.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  @Input() public coracoes: Heart[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  public fullHeart: string = "/assets/coracao_cheio.png";
  public emptyHeart: string = "/assets/coracao_vazio.png";

}
