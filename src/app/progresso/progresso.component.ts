import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  @Input() public progresso: number = 23;

  constructor() { }

  ngOnInit() {
  }

  public get progressPercent(): string {
    return this.progresso.toFixed + "%";
  }

}
