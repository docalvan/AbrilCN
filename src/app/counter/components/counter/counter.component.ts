import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h1>{{edad}}</h1>
  <button (click)="incre(1)">incremento</button>
  <button (click)="restab()">restablecer</button>
  <button (click)="decre(2)" >decremento</button>

  `
})

export class CounterComponent  {

  edad = 10;
  incre(valor:number):void{
    this.edad += valor;
  }

  decre(valor:number):void{
    if(this.edad > 0){
      this.edad -= valor;
    }
  }

  restab(){
    this.edad = 10;
  }
}
