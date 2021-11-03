import { Component, OnInit, Input, OnChanges, DoCheck, IterableDiffer } from '@angular/core';
import { Heart } from 'app/shared/heart.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges, DoCheck {

  @Input() public coracoes: Heart[] = [];

  constructor() {
    console.log("construtor TentativasComponent");
    console.log(this.coracoes);
  }

  ngOnInit() {
    console.log("inicialização TentativasComponent");
    console.log(this.coracoes);
  }

  ngOnChanges() {
    console.log("mudanças TentativasComponent");
  }

  ngDoCheck() {
    console.log("checking TentativasComponent");
  }
}
