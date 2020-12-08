//funcion para validar el formulario de accidentes

// function validaracciden(){

//     var idaciidente = document.getElementById("idcliente").value;
//     var fechaacci = document.getElementById("fecha").value;
//     var horacci = document.getElementById("hora").value;
//     var lugar = document.getElementById("lugar").value;
//     var origen = document.getElementById("origen").value;
//     var cliente = document.getElementById("cliente").value;
//     var consecuencias = document.getElementById("consecuencias").value;
//     var ingresar = 0;
   

//     if(idaciidente==0){

//         document.getElementById("idcliente").style.background="#EDF98E";
//         document.getElementById("idcliente").style.borderColor="#000000";

//     }else{

//         document.getElementById("idcliente").style.background="#ffffff";
//         document.getElementById("idcliente").style.borderColor="#9A9797";
//         ingresar++;

//     }

//     if(fechaacci.length==0 || fechaacci==null){

//         document.getElementById("fecha").style.background="#EDF98E";
//         document.getElementById("fecha").style.borderColor="#000000";

//     }else {
//         document.getElementById("fecha").style.background="#ffffff";
//         document.getElementById("fecha").style.borderColor="#9A9797";
//         ingresar++;
   
//     }


//     if(horacci==null || horacci==""){

//         document.getElementById("hora").style.background="#EDF98E";
//         document.getElementById("hora").style.borderColor="#000000";

//     }else {
//         document.getElementById("hora").style.background="#ffffff";
//         document.getElementById("hora").style.borderColor="#9A9797";
//         ingresar++;
   
//     }

//     if( lugar==null || lugar.length==0){

//         document.getElementById("lugar").style.background="#EDF98E";
//         document.getElementById("lugar").style.borderColor="#000000";

//     }else{

//         document.getElementById("lugar").style.background="#ffffff";
//         document.getElementById("lugar").style.borderColor="#9A9797";
//         ingresar++;

//     }

//     if( origen==null || origen.length==0){

//         document.getElementById("origen").style.background="#EDF98E";
//         document.getElementById("origen").style.borderColor="#000000";

//     }else{

//         document.getElementById("origen").style.background="#ffffff";
//         document.getElementById("origen").style.borderColor="#9A9797";
//         ingresar++;

//     }



//     if(cliente == 0){

//         document.getElementById("cliente").style.background="#EDF98E";
//         document.getElementById("cliente").style.borderColor="#000000";
        
       
//        }else{
           
//         document.getElementById("cliente").style.background="#ffffff";
//         document.getElementById("cliente").style.borderColor="#9A9797";
//         ingresar++;
      
//         }
 



//     if(ingresar==6){

//         document.getElementById("mostrarid").innerHTML += "<td>" + idaciidente + "</td>";
//         document.getElementById("mostrarfecha").innerHTML += "<td>" + fechaacci + "</td>";
//         document.getElementById("mostrarhora").innerHTML += "<td>" + horacci + "</td>";
//         document.getElementById("mostrarlugar").innerHTML += "<td>" + lugar + "</td>";
//         document.getElementById("mostrarorigen").innerHTML += "<td>" + origen + "</td>";
//         document.getElementById("mostrarcliente").innerHTML += "<td>" + cliente + "</td>";
//         document.getElementById("mostrarconsecuencias").innerHTML += "<td>" + consecuencias + "</td>";
//         document.getElementById("formlistacci").reset();

//     }else{

//         alert("Falta Completar Datos");

//     }



// }

// //funcion para ingresar solo numeros  
// function Solo_Numerico(variable){
//     Numer=parseInt(variable);
//     if (isNaN(Numer)){
//         return "";
//     }
//     return Numer;
// }
// function ValNumero(Control){
//     Control.value=Solo_Numerico(Control.value);
// }

// //funcion eliminar un accidente
// function eliminarventa() {

//     var mensaje = confirm("¿Desea Eliminar Un accidente?")

//     if (mensaje) {
//     alert("Accidente Eliminado");
//     }

//     }