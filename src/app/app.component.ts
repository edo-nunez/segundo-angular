import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'segundo-angular';
  resultado:number=0;

  sumar(numero1:number,numero2:number):number{
    return numero1 + numero2;
  }

  restar(numero1:number,numero2:number):number{
    return numero1 - numero2;
  }

  sumarDos(): void {
    this.resultado = this.resultado + 2;
  }

}
