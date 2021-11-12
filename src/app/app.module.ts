import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CompraComponent } from './inventario/compra/compra.component';
import { VentaComponent } from './inventario/venta/venta.component';

import { LoginComponent } from './inventario/login/login.component';
import { RegistroComponent } from './inventario/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    VentaComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})


export class AppModule { }
