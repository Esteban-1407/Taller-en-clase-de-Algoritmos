class Vehiculo {
  constructor(marca, modelo, precio, disponible, caracteristicas) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.disponible = disponible;
    this.caracteristicas = caracteristicas;
  }
}

class Alquiler {
  constructor(vehiculo, dias) {
    this.vehiculo = vehiculo;
    this.dias = dias;
  }

  calcularCosto() {
    if (this.vehiculo.disponible) {
      this.vehiculo.disponible = false;
      const costo = this.vehiculo.precio * this.dias;
      return `El costo del alquiler es de $${costo}.`;
    } else {
      return 'Lo siento, este vehículo no está disponible.';
    }
  }
}

// Ejemplo de uso:
const vehiculo = new Vehiculo('Toyota', 'Corolla', 50, true, { color: 'Azul', aireAcondicionado: true });
const alquiler = new Alquiler(vehiculo, 3);
console.log(alquiler.calcularCosto());
