/*
//OPERADOR TERNARI!!
a=prompt("Entra un número");
//forma abreviada de fer  un if-else
a%3==0 ? console.log(a+ " és divisible per 3") :
console.log(a+ " no és divisible per 3");
*/


/* 
1. Imagina’t que vols fer el pagament del carrito de la compra.
Donades 2 variables totalCarrito, cashDisponible, comprova si tens prou cash
per pagar el total del carret.
*/
console.log("++++++++ Exercici 1 +++++++++");
let totalCarrito;
let cashDisponible;
totalCarrito = 100;
cashDisponible = 200;
if (totalCarrito < cashDisponible) {
    console.log("Tens prous diners per fer la compra :)");
} else {
    console.log("No tens prous diners per fer la compra :(");
}

/*
2. Imagina’t que en la teva botiga els usuaris poden tenir 3 roles:
• ADMIN: El Usuario puede editar, eliminar y ver toda la información
• EDITOR: El usuario solo puede editar sus registros
• AUTOR: El usuario solo puede registrar usuarios
• ANOMYMOUS: El Usuario es visitante, solo puede ver la información
Controla les accions que poden fer cadascún d’ells amb un if
*/
console.log("++++++++ Exercici 2 +++++++++");
let usuari;
//usuari = prompt("Quin tipus d'usuari ets: admin, autor, editor o anonymous?").toUpperCase();
if (usuari == "ADMIN") {
    window.alert("Admin: pots editar, eliminar i veure tota la informació.");
} else if (usuari == "EDITOR") {
    window.alert("Editor: pots editar els teus registres.");
} else if (usuari == "AUTOR") {
    window.alert("Autor: pots registrar ususaris.");
} else if (usuari == "ANONYMOUS") {
    window.alert("Anonymous: ets visitant, només pots veure la info.");
} else {
    window.alert("Error: ese rol de usuario no existe.")
}


/*
3. Quina és la millor estructura de control per diferenciar les funcionalitats de les
formes de pagament d’una compra, tenint les següents opcions: efectiu, codi
promocional, tarjeta. Escriu la estructura de control més adecuada.
*/
console.log("++++++++ Exercici 3 +++++++++");
let pagament;
pagament = "targeta";
switch (pagament) {
    case "efectiu":
        console.log("Has triat pagament en efectiu.");
        break;
    case "codi promocional":
        console.log("Has triat pagament amb codi promocional.");
        break;
    case "targeta":
        console.log("Has triat pagament amb targeta.");
        break;
    default:
        console.log("Tria un mètode de pagament vàlid.");
        break;
}

/*
4. Per un pagament s’han de donar TOTES les opcions:
    1. Que tingui cash
    2. Que la compra sigui més gran que 100€
*/
console.log("++++++++ Exercici 4 +++++++++");
let cash = 150;
let compra = 120;
if ((cash > compra) && (compra > 100)) {
    console.log("Pots fer la compra.");
} else {
    console.log("No pots fer la compra.");
}


/*
5. Fes l’anterior exercici fent servir l’operador ternari
*/
console.log("++++++++ Exercici 5 +++++++++");
(cash > compra) && (compra > 100) ? console.log("Pots fer la compra."):
    console.log("No pots fer la compra.");

/*
6. Demana una nota (número). Mostra qualificació segons nota:
    0-3: Mol deficient
    3-5: Insufficient
    5-6: Sufficient
    6-7: Bé
    7-9: Notable
*/
console.log("++++++++ Exercici 6 +++++++++");
let nota;
nota = 2;
let qualificacio;
switch (nota) {
    case 2:
        qualificacio = "Molt deficient."
        break;
    case 4:
        qualificacio = "Insuficient."
        break;
    case 6:
        qualificacio = "Suficient."
        break;
    case 7:
        qualificacio = "Bé."
        break;
    case 8:
        qualificacio = "Notable."
        break;
    default:
        qualificacio = "posa una nota vàlida del 0 al 9"
        break;
}
console.log(qualificacio);


/*
7. Compara aquests dos condicionals ... quina és la diferencia?
const age = '18';
if (age === 18) console.log('You just became an adult :D ');
if (age == 18) console.log('You just became an adult :D ');
*/
console.log("++++++++ Exercici 7 +++++++++");
const age = '18';
if (age === 18) console.log('You just became an adult :D '); 
//=== vol dir igual tipus de dada en aquest cas enter i x tant no sortirà
if (age == 18) console.log('You just became an adult :D ');