class Cliente {
    constructor(nombre, cedula,correo, celular) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.correo = correo;
        this.celular = celular;
    }
    registrar_Cliente(nombre,cedula,correo,celular){
        let nombre = this.nombre(prompt(`Ingrese su nombre`));
        let cedula = this.cedula(prompt(`Ingrese su cedula`));
        let correo = this.correo(prompt(`Ingrese su correo de usuario`));
        let celular = this.celular(prompt(`Ingrese un numero de celular`))
    }
}

class barbero {
    constructor(nombre,celular){
        this.nombre = nombre;
        this.celular = celular;
    }
    registrar_barbero(nombre, celular){
        let nombre = this.nombre(prompt(`Ingres el nombre del barbero`));
        let celular = this.celular(prompt(`Ingrese el numero celular del barbero`));    
    }
}
const Cliente = new Cliente;