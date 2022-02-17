/* 1. Donat el següent string:
const producto = ' Monitor 20 Pulgadas ';
Elimina tots els espais en blanc de l’inici i del final*/

const producto = "   Monitor 20 Pulgadas   ";
console.log(producto);

console.log(producto.length);
console.log(producto.trim());
console.log(producto.trim().length);


/* Practicarem amb els mètodes: .replace , .slice, i typeof
Donada la següent declaració: const producto = 'Monitor 20 Pulgadas'; 
a. Reemplaça Pulgadas per ‘. Reemplaça 20 per 40.
b. Extreu en una nova variable la següent part de la frase: 40 Pulgadas.
c. Extreu en una nova variable la següent part de la farase: nitor 20.
d. Declara una variable i assignali el teu Nom. Mostra la primer lletra d’aquesta
variable. */

const producto3 = "Monitor 20 Pulgadas";
let canvi = producto3.replace("Pulgadas", "'");
let canvi2 = producto3.replace("20", "40");
let canvi3 = producto3.slice(8, producto3.length)
let canvi4 = producto3.slice(2, 10);
let nom = "natalia";
console.log(canvi);
console.log(canvi2);
console.log(canvi3);
console.log(canvi4);
console.log(nom.slice(0, 1));






/* 3. Practicarem amb Split
let actividad = 'Estoy aprendiendo Javascript Moderno';
Separa variable actividad, tenint en compte espai en blanc.
let hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
Ara fes-ho tenint en compte la coma. */

let actividad = 'Estoy, aprendiendo, Javascript, Moderno';
console.log(actividad.split(","));

/* 4. Canvia el següent text tot a majúscula.
const producto = 'Monitor 24 pulgadas '; */

const producto2 = 'Monitor 24 pulgadas ';
console.log(producto2.toUpperCase());


/* 5. Realitzar la cerca d'un string en un string origen. Per fer-ho cal demanar per pantalla
una frase o text (la font) i després una paraula a cercar. En cas de trobar-la, imprimir
la posició, sinó un missatge que indiqui que no hi és.
Quina es la longitud de la Frase? */

let frase = "Hola que tal estás";
let paraula = "que";
console.log(frase.indexOf(paraula));

