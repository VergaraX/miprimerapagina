/*
console.log("Hola equipo 83");
console.log("Estamos avanzando con la integración de JS en HTML");

var vabledep = 12.45; // No recomendado

// Recomendadas
let vble1 = 47;
const vble2 = 33;
const res = vble1 + vble2;

if(res >= 100){
    console.log("Sistema desbordado");
}else{
    console.log("Todo OK");
}

console.log("Estado actual: ",res);
sum(17, 42);
sum(89, 123);


function sum(a, b){
    console.log("Suma: ",a+b);
};
*/

//showAlert();

function showAlert(){
    alert("Hola esta es una alerta desde JavaScript");
}

document.querySelector("button.button-menu-toggle").addEventListener("click", function(){
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")    
})
