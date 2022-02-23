/*Identifica si un número és parell o imparell amb un for...*/

let num = 6;
let resposta;
for (i = 0; i <= num; i++){
    if(i %2 == 0){
        resposta = i + " és impar";
    }else{
        resposta = i+ " és par";
    }
    console.log(resposta);
}


/*2. Crear un programa que lea un número entero y a partir de él cree un cuadrado
de asteriscos con ese tamaño. ( fem servir el debugger ), exemple, numero=5
*****
*****
*****
*****
*****
*/

document.write("Exercici 2 </br>");
let num2 = 10;
for (let index = 0; index < num2; index++) {
    for(j = 0; j < num2; j++){
        document.write(" * ");
    } 
    document.write("</br>");
}

/*3. El mateix que l’anterior exercici, però aquesta vegada el numero de files es
diferent que al de les columnes. Exemple, files=2, columnes=7*/

document.write("Exercici 3 </br>");

let files = 2;
let columnes = 3;
for (let index = 0; index < files; index++) {
    for(j = 0; j < columnes; j++){
        document.write(" * ");
    } 
    document.write("</br>");
}

/*4. Fes un programa que demani un número i calculo la seva taula de multiplicar*/

document.write("Exercici 3 </br>");
let num3 = parseInt(prompt("Introdueix un número:"));
for(i = 1; i < 11; i++){
    let multiplicacio = i * num3;
    document.write(num3 + " x " + i + " = " + (multiplicacio) + "</br>");
}


