import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CompraComponent } from "./inventario/compra/compra.component";
import { IndexComponent } from "./inventario/index/index.component";
import { VentaComponent } from "./inventario/venta/venta.component"; 
import { LoginComponent } from "./inventario/login/login.component"; 
import { RegistroComponent } from "./inventario/registro/registro.component";



const routes: Routes = [

    {path:'compra', component:CompraComponent},
    {path:'venta', component:VentaComponent},
    {path:'login', component:LoginComponent},
    {path:'registro', component:RegistroComponent},
    {path:'', component: IndexComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}