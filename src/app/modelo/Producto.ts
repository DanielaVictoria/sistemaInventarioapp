export class Producto{
    id!:number;
    nombre!:String;
    cantidad!:number;
    precioCompra!:number;
    precioVenta!:number;

    constructor(){}
    
    toString(){
        return "id"+ this.id +"nombre" + this.nombre + "cantidad" + this.cantidad + "precio compra" + this.precioCompra + "precio venta" + this.precioVenta
    }
}


    
