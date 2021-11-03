import { Component } from "@angular/core";

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  /* template: `<p>Alternative template for TopoComponent</p>`, */
  styleUrls: ['./topo.component.css'],
  /* styles: [
    `p {
      font-size: 2.5em;
    }`,
    `p {
      font-family: sans-serif;
      color: #53a;
    }`
  ] */
})
export class TopoComponent {
  public title: string = "Learning English"
  public teacherName: string = "Gabriel Alonso";
  public teacherAge: number = 23;
}