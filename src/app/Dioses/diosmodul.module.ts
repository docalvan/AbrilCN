import { NgModule } from "@angular/core";
import { DiosComponent } from "./Dios/dios.component";
import { ListComponent } from "./List/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    DiosComponent
    ,ListComponent
  ],
  exports:[
    DiosComponent
    ,ListComponent
  ],

  imports:[
    CommonModule
  ]


})

export class DiosModule{

}
