import { Component } from '@angular/core';

@Component({
  selector: 'app-Dioses-dios',
  templateUrl: './dios.component.html',
  styleUrl: './dios.component.css'
})

export class DiosComponent {

  dios = '';
  arma = '';
  hijo = '';

  mostrarlist:boolean = true;

  DiosIop() {

    this.dios = 'Yopuka';
    this.arma = 'Espada';
    this.hijo = 'Gultar';
  }

  DiosaFeca() {

    this.dios = 'Feca';
    this.arma = 'Escudo';
    this.hijo = 'Otomai';
  }

  ArrDios1 = ['Xelor','Ocra', 'Anutrof'];
  ArrDios2 = ['Aniripsa','Osamoda', 'Sacrogrito'];

  condicion(){
    if(this.mostrarlist = false){
      this.mostrarlist = true;
    }
    else{
      this.mostrarlist = false;
    }

  }

  borrarheroe(){
    this.ArrDios1.pop();
    this.ArrDios2.pop();
  }

}
