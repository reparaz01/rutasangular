import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-collatzcomponent',
  templateUrl: './collatzcomponent.component.html',
  styleUrls: ['./collatzcomponent.component.css'],
})
export class CollatzcomponentComponent {
  public number!: number;
  public collatzResult!: string;

  constructor(private _activeRoute: ActivatedRoute) {}

  ngOnInit(){
    this._activeRoute.params.subscribe((parametros: Params) => {
        this.number= +parametros['num'];
        this.collatzResult = this.calculateCollatz(this.number)
      });
}
calculateCollatz(n: number): string {
  let result = n.toString() + ' -> ';
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    result += n.toString() + ' -> ';
  }
  return result + 'Collatz completado';
}

}
