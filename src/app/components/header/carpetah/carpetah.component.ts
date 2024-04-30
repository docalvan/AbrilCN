import { Component } from '@angular/core';

@Component({
  selector: 'app-carpetah',
  templateUrl: './carpetah.component.html',
  styleUrl: './carpetah.component.css'
})

export class CarpetahComponent {
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
