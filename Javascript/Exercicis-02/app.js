/*3. Implementa un programa que comprovi que les dades introduïdes són números.

function isNumber(x) {
    if (typeof x == "number") {
        let resultat;
        resultat = x + " és un número";
        console.log(resultat);
    } else {
        resultat = x + " no és un número";
        console.log(resultat);
    }
}

let dada;
dada = "hola que tal";
isNumber(dada);

dada = 345;
isNumber(dada);

dada = 45678;
isNumber(dada);
*/




/* 4. Fes un programa que demani dos números a l’usuari i informi per pantalla de quin és
el menor i el major, o si són iguals.

let num1;
num1 = parseInt(prompt("Introdueix un número: "));

let num2;
num2 = parseInt(prompt("Introdueix un altre número: "));

let resposta;

if (num1 > num2) {
    resposta = "major";
} else if (num1 < num2) {
    resposta = "menor";
} else {
    resposta = "igual";
}
document.write(num1 + " és " + resposta + " que " + num2 + ".");

*/




/*5. Fes un programa que demani un número a l’usuari i calculi si és parell o senar.

let num3;
num3 = parseInt(prompt("Introdueix un número: "));
let resposta2;

if (num3 % 2 == 0) {
    resposta2 = "parell";
} else {
    resposta2 = "imparell";
}

document.write(num3 + " és " + resposta2 + ".");

*/




/*6. Fes un programa que demani a l’usuari l’altura i el pes i mostri per pantalla el seu
índex de massa corporal (IMC)  IMC = peso [kg]/ estatura [m2]

let alt, pes, resposta3;
alt = parseInt(prompt("Introdueix la teva alçada (cm):"));
pes = parseInt(prompt("Introdueix el teu pes (kg):"));
resposta3 = (pes / (alt/100)**2).toFixed(3);  
//alt/100 per passar de cm a metres
//toFixed() per a limitar el num de decimals a 3
document.write("El seu IMC és de " + resposta3);

*/





/*7. Considerant la següent assignació: let marca="total"+ 16 +4
obté per consola total20*/

let marca="total" + (16 + 4);
console.log(marca);




