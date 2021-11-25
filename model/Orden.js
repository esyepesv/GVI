class Orden{
    constructor(id, cliente, vendedor, fecha){
        this.id = id;
        items = new Array();
        this.comprador = cliente;
        this.vendedor = vendedor;
        this.fecha = fecha;
    }
    getComprador() {
        return this.comprador;
    }
    getVendedo() {
        return this.vendedor;
    }
    getFecha(){
        return this.fecha;
    }
}