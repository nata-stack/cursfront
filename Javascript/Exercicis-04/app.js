/*1. Donat un número:
arrodoneix, arrodoneix cap abaix i cap adalt, arrel cuadrada, absolut, potencia,
minim, maxim, aleatori, aleatori dins d’un rang.*/

let x = 45.56;
let y = 3;
let z = 77;
let arrodonit = Math.floor(x);
console.log(arrodonit);
console.log("Arrel quadrada de " + x + " és " + Math.sqrt(x));
console.log(Math.max(x, y, z));
console.log(Math.min(x, y, z))




/*2. Fes un programa que demani dos números a l’usuari i retorni un valor aleatori
enter comprès entre aquests dos números, ambdós inclosos
*/

let num1 = parseInt(prompt("Introdueix un num: "));
let num2 = parseInt(prompt("Introdueix un altre num: "));
let major = Math.max(num1, num2);
let menor = Math.min(num1, num2);
let aleatori = Math.random() * (major - menor + 1) + menor;
let rodo = Math.round(aleatori);
document.write(rodo);



