/*
 `
*/
/*alert('Hola Mundo!!!');*/
var nombre = "Juan Lagos";
var altura = 171;

var unionvar1_2 = nombre + " " + altura;

/*
document.write(nombre);
document.write(altura);
document.write(unionvar1_2);*/

var datos = document.getElementById("datos");
datos.innerHTML =  unionvar1_2;

if (altura>= 180){
    datos.innerHTML += '<h1> Eres una persona Alta<h1/>';
}else{
    datos.innerHTML += '<h1> Eres una persona Bajita<h1/>';
}
/*
for (var i = 1990; i<=2020; i++){
    datos.innerHTML += "<h2>Estamos en el año"+ i;
}
*/

function Muestraminombre(nombre, altura){
    var unionvar1_2 = nombre + " " + altura;
    datos.innerHTML +=  unionvar1_2;
}

Muestraminombre("Daniela Sanchez",170);