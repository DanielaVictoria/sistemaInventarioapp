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
<<<<<<< HEAD
  producto:Producto = new Producto();
=======
>>>>>>> 6ef0c95b837e2a345cc0c3159fcec104f3638ca6
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }
<<<<<<< HEAD

  Actualizar(){
    alert(this.producto)
    this.service.createProducto(this.producto)
    .subscribe(data=>{
      alert("Se actualizó con éxito");
      this.router.navigate(["venta"])
    })
  }
=======
>>>>>>> 6ef0c95b837e2a345cc0c3159fcec104f3638ca6
}