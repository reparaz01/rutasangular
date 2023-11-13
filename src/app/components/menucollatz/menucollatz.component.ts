import { Component } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent {
  public numbers!: Array<number>;

  constructor(){
    this.generarNumerosCollatz();
  }

  generarNumerosCollatz(){
    this.numbers = Array.from({length:10}, () => Math.floor(Math.random() * 100))
  }
}
