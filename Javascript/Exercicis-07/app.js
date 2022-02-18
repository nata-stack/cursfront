/* 
1. Declara una variables anomenada esCorrecte, assigna-li true o false. Utilitza un
condicional per veure el seu valor.

2. Declara i assigna dos valors booleans. Programa els següent escenaris:
a. Escenari 1: Si tots dos valors són certs, el resultat hauria de ser cert. En
la resta de casos ha de ser Fals.
b. Escenari 2: Si un dels dos valors és certs, el resultat hauria de ser cert.
En la resta de casos ha de ser Fals.

3. Analitza les següents expressions lògiques. Mostra per pantalla el seu valor i
raona el seu resultat.
a) 2 < 12
b) 2 < "12"
c) "2" < "12"
d) !("2" < "12")
e) ((2 < "12") && (2 == "2"))
f) (("2" < "12") || (2 < 12))
g) (("2" < "12") && (2 < 12)) 
*/

console.log("******1*****");
let esCorrecte = true;
esCorrecte = false;
if (esCorrecte) {
    console.log("és true");
} else {
    console.log("és false");
}



console.log("******2 a)*****");
let x = true;
let y = true;

if (x && y == true) {  //el ==true no cal però m'agrada posar-lo
    console.log("és true");
} else {
    console.log("és false");
}



console.log("******2 b)*****");

if (x || y) {
    console.log("és true");
} else {
    console.log("és false");
}


console.log("******3 a)*****");

let z = 2 < 12;

if (z) {
    console.log("és true");
} else {
    console.log("és false");
}


console.log("******3 b)*****");
z = 2 < "12";
if (z) {
    console.log("és true");
} else {
    console.log("és false");
}


console.log("******3 c)*****");
z = "2" < "12";
if (z) {
    console.log("és true");
} else {
    console.log("és false");
}


console.log("******3 d)*****");
z = !("2" < "12");
if (z) {
    console.log("és true");
} else {
    console.log("és false");
}


console.log("******3 e)*****");
z = ((2 < "12") && (2 == "2"));
if (z) {
    console.log("és true");
} else {
    console.log("és false");
}


console.log("******3 f)*****");
z = (("2" < "12") || (2 < 12));
if (z) {
    console.log("és true");
} else {
    console.log("és false");
}


console.log("******3 f)*****");
z = (("2" < "12") || (2 < 12));
if (z) {
    console.log("és true");
} else {
    console.log("és false");
}


console.log("******3 g)*****");
z = (("2" < "12") && (2 < 12));
if (z) {
    console.log("és true");
} else {
    console.log("és false");
}

let a = "72";
let b = "8";
let c = a > b;
console.log(c);


