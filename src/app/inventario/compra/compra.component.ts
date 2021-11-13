import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  productos:Producto[] = [];
  producto:Producto = new Producto();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  Registrar(){
    alert("Se registró con éxito")
    this.service.createProducto(this.producto)
    .subscribe(data=>{
      alert("Se registró con éxito");
      this.router.navigate(["compra"])
    })
  }

}
