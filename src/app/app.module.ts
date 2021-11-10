import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CompraComponent } from './inventario/compra/compra.component';
import { VentaComponent } from './inventario/venta/venta.component';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
