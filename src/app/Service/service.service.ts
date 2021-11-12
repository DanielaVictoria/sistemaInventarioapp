import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Producto } from '../modelo/Producto';
<<<<<<< HEAD
import { Persona } from '../modelo/Persona';
=======
>>>>>>> 6ef0c95b837e2a345cc0c3159fcec104f3638ca6

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/sistemainventario/producto';

  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }

  createProducto(producto:Producto){
    return this.http.post<Producto>(this.Url,producto);
  }
<<<<<<< HEAD

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }
=======
>>>>>>> 6ef0c95b837e2a345cc0c3159fcec104f3638ca6
}
