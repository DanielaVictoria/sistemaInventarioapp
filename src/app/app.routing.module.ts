import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompraComponent } from "./inventario/compra/compra.component";
import { IndexComponent } from "./inventario/index/index.component";
import { VentaComponent } from "./inventario/venta/venta.component"; 
import { LoginComponent } from "./inventario/login/login.component";
import { LogoutComponent } from "./inventario/logout/logout.component"; 
import { RegistroComponent } from "./inventario/registro/registro.component";
import { AuthGaurdService } from "./Service/auth-gaurd.service";


const routes: Routes = [

    {path:'compra', component:CompraComponent, canActivate:[AuthGaurdService]},
    {path:'venta', component:VentaComponent, canActivate:[AuthGaurdService]},
    {path:'login', component:LoginComponent},
    {path:'logout', component:LogoutComponent,canActivate:[AuthGaurdService]},
    {path:'registro', component:RegistroComponent},
    {path:'', component: IndexComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}