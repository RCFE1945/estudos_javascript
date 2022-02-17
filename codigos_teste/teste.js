//Algoritimo que inverte os dados de um array e cria outro array com estes dados
/*
function reversArray(_array = []){
    var reveArray = [];
    var contArray = (_array.length) -1;
    for( var conter = 0;_array.length > conter; conter++){
        reveArray.push(_array[contArray]);
        contArray--;
    }
    return reveArray;
}
var list = ["A","B","C","D","E"];
console.log(reversArray(list));
*/

//Teste em JSON
/*
var string = JSON.stringify({"name":"Ramon","sex":"m"});
console.log(string);
console.log(JSON.parse(string).name);
*/

//Algoritimo que conta quantas letras tem em uma palavra
/*
function contBs(_string,_char){
    var string = String(_string);
    var char = String(_char);
    var conterChar = 0;
    for(conter = 0;string.length > conter;conter++){
        if(string.charAt(conter) === char){
            conterChar++;
        }

    }
    return conterChar;
}
var string = String(prompt("Digite uma palavra: ",""));
var char = String(prompt("Qual letra voce quer procurar: ",""));
alert(contBs(string,char));
*/

//Teste
/*
var e = 2;
console.log(e);
e = 4;
console.log(e);
e = Math.pow(e,e);
console.log(e);
*/

//Verificacao de numero menor
/*
var a = Number(prompt("Digite a: ",""));
var b = Number(prompt("Digite b: ",""));
var g = Math.min(a,b);
console.log(g);
*/

//Funcoes Crecentes
/*

// Algoritimo de Formatacao de numeros //
function zeroPad(number, width){
    var string = String(number);
    while(string.length < width){
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs){
    console.log(zeroPad(cows,3)+" Cows");
    console.log(zeroPad(chickens,3)+" Chickens");
    console.log(zeroPad(pigs,3)+" Pigs");
}
printFarmInventory(7,16,3);
*/

//Algotimo recursivo
/*
function findSolution(target){
    function find(start,history){
        if(start == target){
            return history;
        }else if(start > target){
            return null;    
        }else{
            return find(start+5,"("+history+"+5)") || find(start*3,"("+history+"*3)");
        }
    }
    return find(1,"1");
}
console.log(findSolution(24));
// (((1 * 3) + 5) * 3)
*/

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