// let montoCofla = prompt (`Cuanto dinero tienes?`);
// let montoPedro= prompt (`Cuanto dinero tienes pedro`);
// let montoSimon= prompt (`Cuanto dinero tienes Simon?`);
// if (montoCofla >= 0.6 && montoCofla<1){
//     alert("Comprate el helado de queso con bocadillo")
// }
// else if (montoCofla >= 1 && montoCofla< 1.8){
//     alert("Comprate el chococono")
// }
// else if (montoCofla >= 1.8 ){
//     alert("COMPRATE EL HELADO DE CHOCOBREAK")
// }
// else {
//  alert("No te alcanza rey")
// }
// let free = false;
// const Verificar_Edad =(time)=>{
//     let pregunta = parseFloat( prompt(`Digite su edad`));
//     if(pregunta>=18){
//        if(time >= 2 && time < 7 && free == false){
//          alert(`Puede ingresar`);
//         free = true; 
//         } else{
//             alert(`Puede ingresar pero debe pagar la entrada`)
//         }
//     }
//     else{
//         alert(`No Puede ingresar`)
//     }
//     }
//     Verificar_Edad(3);
//     Verificar_Edad(7);
//     Verificar_Edad(12);
//     Verificar_Edad(4);
let cantidad = prompt(`Cuantos alumnos son`);
let Totalestudiantes = [];
for (i = 0; i < cantidad; i++) {
    Totalestudiantes[i] = [prompt(`Ingrese el nombre del estudiante` + (i + 1)), 0];
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        Totalestudiantes[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in Totalestudiantes) {
        tomarAsistencia(Totalestudiantes[alumno][0], alumno);
    }
}
for (alumno in Totalestudiantes) {
    let resultado = `${Totalestudiantes[alumno][0]}: <br>
    _____Presentes : ${Totalestudiantes[alumno][1]} <br>
    _____Ausencias : ${30 - Totalestudiantes[alumno][1]}`;
    if (30 - Totalestudiantes[alumno][1] > 18) {
        resultado += ""+ "probado por inasistencia"
    }
    else {
        resultado += "<br><br>"
    }
    document.write(resultado)
}