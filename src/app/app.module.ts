import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarpetahComponent } from './components/header/carpetah/carpetah.component';

import { CounterModule } from './counter/components/counter/counter.module';
import { DiosModule } from './Dioses/diosmodul.module';


@NgModule({
  declarations: [
    AppComponent
    ,CarpetahComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    DiosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
