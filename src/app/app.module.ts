import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PrimengModule } from './primeng/primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateMasterComponent } from './components/templates/template-master/template-master.component';
import { GraficosComponent } from './components/pages/graficos/graficos.component';
import { GraficoTablaComponent } from './components/pages/graficos/grafico-tabla/grafico-tabla.component';
import { GraficoBarrasComponent } from './components/pages/graficos/grafico-barras/grafico-barras.component';
import { MapaComponent } from './components/pages/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateMasterComponent,
    GraficosComponent,
    GraficoTablaComponent,
    GraficoBarrasComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
