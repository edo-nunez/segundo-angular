import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'otroAngular';

  resultado:number=0;

  dividir(numero1:number,numero2:number):number{
    return numero1 / numero2;
  }

  multiplicar(numero1:number,numero2:number):number{
    return numero1 * numero2;
  }

  restarDos(): void {
    this.resultado = this.resultado - 2;
  }

  restarElevarCuadrado(): void {
    this.resultado = (this.resultado - 2) ** 2;
  }
  
  raizCuadrada(): void {
    this.resultado = this.resultado ** 0.5;
  }

}