class estudiante {
    constructor(nombre, cedula, email, genero, celular) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.email = email;
        this.genero = genero;
        this.celular = celular;  
    }
}
    
    class inmbueble {
        constructor(numero, costo) {
            this.numero = numero;
            this.costo = costo;
        }
    }
    class servicio {
            constructor(estudiante, habitacion, numerocontrato, fecha, cantidadmeses) {
                this.estudiante = estudiante;
                this.habitacion = habitacion;
                this.numerocontrato = numerocontrato;
                this.fecha = fecha;
                this.cantidadmeses = cantidadmeses;  
            }
    }
    const estudiante = [
        new estudiante("manuel", 1, "123@gmail.com", "masculino", "3157049374"),
        new estudiante("antonia", 2, "1camino@gmail.com", "femenino", "3180324784"),
        new estudiante("camila", 3, "casinjo3248@gmail.com", "femenino", "317902742"),
        new estudiante("emma", 4, "cangrejo983@gmail.com", "femenino", "3203294735"),
    ]
   
    const inmbueble = [
        new inmbueble("201", "230.000"),
        new inmbueble("202", "270.000"),
        new inmbueble("203", "230.000"),
        new inmbueble("301", "500.000"),
    ]
    const servicio = [
        new servicio(estudiante[0], inmbueble[0], 11, "09-05-2023", 2),
        new servicio(estudiante[1], inmbueble[1], 21, "09-05-2023", 3),
        new servicio(estudiante[2], inmbueble[2], 32, "09-05-2023", 1),
        new servicio(estudiante[3], inmbueble[3], 41, "09-05-2023", 1),
    ];
    
    const masculino = servicio.filter(servicio => servicio.estudiante.genero === "masculino");
    const femenino = servicio.filter(servicio => servicio.estudiante.genero === "femenino");
    
    alert(`Hay ${masculino.length} estudiantes masculinos`);
    alert(`Hay ${femenino.length} estudiantes femenino`);
     
    const costoTotal = servicio.reduce((total, servicio) => total + servicio.inmbueble.costo * servicio.cantidadmeses, 0);

    alert(`El costo total  por cliente es ${costoTotal}$`)