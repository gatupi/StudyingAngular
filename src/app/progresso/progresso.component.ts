import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit, OnChanges {

  @Input() public progresso: number = 23;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("mudanças em ProgressoComponent");
  }

/*   ngDoCheck() {
    console.log("checking ProgressoComponent");
  } */

  public get progressPercent(): string {
    return this.progresso.toFixed + "%";
  }

}
