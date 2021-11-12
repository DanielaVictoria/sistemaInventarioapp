import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CompraComponent } from './inventario/compra/compra.component';
import { VentaComponent } from './inventario/venta/venta.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})


export class AppModule { }
