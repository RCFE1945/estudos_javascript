//Testando a prioridade de argumentos quando e passado mais argumentos que necessario
/*
alert("Hello World", "Good Morning", "Good Evening", "Good Nigth");
*/

//Testando criar um ambiente local 
/*
var something = 1;
console.log(something);
{
    var something = 2;
    console.log(something);
}
console.log(something);
*/

//Algorito imprimi um xadre na tela 
/*
var xd = "";
var number = Number(prompt("Size: ",""));
while(xd.length < Math.pow(number,2)){
    for(var cont = 0;cont < number;cont++){
        if(cont % 2 == 0){
            xd += "0";
        }else{
            xd += "#";
        }
    }
    xd += "\n";
}
console.log(xd);
*/

//Algoritimo 
    /*Regra de negocio quando o numoro divisivel por 3 imprimir Fizz
    quando o numoro divisivel por 5 imprimir Buzz
    quando o numoro divisivel por 3 e 5 imprimir FizzBuzz*/
/*
for(var number = 1;number < 201; number+=1){

    if(number % 3 == 0 && number % 5 == 0){
        console.log("FizzBuzz");
    }
    else if((number % 3 == 0)){
        console.log("Fizz");
    }else if((number % 5 == 0)){
        console.log("Buzz");
    }else{
        console.log(number);
    }
    
}
*/

//Testando a estrutura for
//Algorito escreve em uma variavel do tipo string uma sequencia de #
/*
for (var jv = ""; jv.length < 8 ; jv += "#"){
    console.log(jv);
}
*/

//Algorito simples e sem funcionalidade 
//Testando a estrutura switch eo break
/*
var num = Number(prompt("Digite 1 0u 2 : ",""));
 switch(num){
    case 1 :
        alert("Um");
        break;
    case 2:
        alert("Dois")
        break;
 }
alert("Feito");
 */

//Testando a atualizacao de variaveis sucintamente
/*
var number = 2;
number *= 2;
number *= 2;
number *= 2;
alert(number);
*/

//Algoritmo que retorna se o numero inserido e par ou impar ou se nao corresponde a um numero
//Testando as estruturas de condicao (if ,else)
/*
var number = Number(prompt("Digite um numero: "));
if(!isNaN(number)){
    if((number % 2) == 0){
        console.log("Este numero e par");
    }else{
        console.log("Este numero e impar");
    }
}else{
    alert("O valor nao coresponde a um numero");
}
*/

//Algoritimo que calcula a potencia de 2 elevado a 10
/*
var result = 1;
var conter = 0;
while(conter < 10){
    result = (result * 2);
    conter += 1;
    console.log(result)
}
*/

//Testando a estrutura de repeticao while para mostra os numeros pares ate 12
/*
var number = 0;
while(number <=12){
    console.log(number);
    number += 2;
}
*/

//Testando os comomandos prompt e alert
/*
alert("Hello, World!");
var a = Number(prompt("Digite um numero: ",""));
var b = Number(prompt("Digite outro numero: ",""));
var soma = (a + b);
alert("a soma de "+a+" + "+b+" e "+soma);
*/