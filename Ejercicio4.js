class cliente{
    constructor(nombre,edad,correo,pago){
        this.nombre=nombre;
        this.edad=edad;
        this.correo=correo;
        this.pago=pago;
    }
}

class tren{
    constructor(capacidad, disponibles, precio,reservaciones){
        this.capacidad=capacidad;
        this.disponibles=disponibles;
        this.precio=precio;
        this.reservaciones=reservaciones;
    } 
    asientosdisponibles(){
        if(this.capacidad-this.disponibles>0){
            return console.log(`Si hay asientos disponibles`)
        } else{
            return console.log(`No hay asientos disponibles`)
        }
    }
}


class Ticket{
    constructor(clientep){
        this.clientep=clientep;
        this.salida="2:00 A.M";
        this.origen="New York";
        this.destino="New Jersey";
    }
}
const cliente1= new cliente("Ana Lizcano", 18,"analu@gmail.com","Tarjeta")
const trencito= new tren(20,15,5000,cliente1);
const tiquete= new Ticket(cliente1);
console.log(tiquete);