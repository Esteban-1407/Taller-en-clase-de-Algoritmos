function Verificar_Edad(){
let pregunta = parseFloat( prompt(`Digite su edad`));
if(pregunta<18){
    alert(`No puede ingresae`)
}
else{
    alert(`Puede ingresar`)
}
}
Verificar_Edad();

function suma(n1,n2){
    let sum = n1 + n2;
    return sum
}
let adicion =  suma(77,72)
document.write(adicion);
    