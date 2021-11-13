import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  productos:Producto[] = [];
  producto:Producto = new Producto();

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  Actualizar(){
    alert("Se actualizó con éxito");
    this.service.createProducto(this.producto)
    .subscribe(data=>{
      alert("Se actualizó con éxito");
      this.router.navigate(["venta"])
    })
  }
}