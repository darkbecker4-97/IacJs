var mediaFinal = 0;
var avalicaoParcial1 = 1;

console.log("avaliação parcial= " + avalicaoParcial1);
var avalicaoParcial2 = 2;
console.log("avaliação parcial2= " + avalicaoParcial2);

var ativSemestral = 5;
console.log("avaliação semestral= " + ativSemestral);

media = avalicaoParcial1 + avalicaoParcial2 + ativSemestral;

console.log("Sua média é " + media);
console.log(`(Com Interpolação) Sua média é: ${media}`)

//

var vardade = 1;
var falso = 0;

var usuarioDesativado = true;

console.log(typeof (usuarioDesativado));

var sim = 1 == 1;
var inteiro = 12;
var pontoFlutuante = 12.99;
var nome = "Iago";
console.log('tipo ' + sim);
console.log('tipo ' + typeof (inteiro));
console.log('tipo ' + typeof (pontoFlutuante));
console.log('tipo ' + typeof (nome));

var tipo;
console.log(tipo);

var numero = 10;
var numeroT = '10';
console.log(numero + numeroT);
if (numero === numeroT) {
    console.log('true');
} else {
    console.log('false');
}

//

//if (valor > 1 && nota > 5) {
//   console.log(true);
//}

//if (valor > 1 || nota > 5) {
//    console.log(true);
//}
var desativado = false;

if (!desativado) {
    console.log(true);
} else {
    console.log(false);
}

//Atividade

//Declarar uma variável, atribuir um valor numérico a ela. 
//Mostrar o valor e o tipo. Teste todos os tipos vistos em sala de aula.
var tipos = 2;
console.log(tipos);
console.log(typeof (tipos));

var sim = 1 == 1;
var inteiro = 12;
var pontoFlutuante = 12.99;
var nome = "Iago";
console.log('tipo ' + sim);
console.log('tipo ' + typeof (inteiro));
console.log('tipo ' + typeof (pontoFlutuante));
console.log('tipo ' + typeof (nome));


//Quando um valor de uma variável será undefined?
//R: Quando a variável que está sendo avaliada não tem um valor atribuído.


//Pesquisa quando uma variável terá um valor NaN. O que é?
//R: Terá um valor NaN quando não for number.


//Imprima a média aritmética de 3 números.
var n1 = 7;
console.log(`Nota 1: ${n1}`);

var n2 = 5;
console.log(`Nota 2: ${n2}`);

var n3 = 6;
console.log(`Nota 3: ${n3}`);


var media = n1 + n2 + n3 / 3;
console.log(`Sua média é de ${media}`)


//Simule as notas de um aluno da Ulbra. AP1, AP2, AS e média final.
var ap1 = 5;
console.log("Ap1: " + ap1);

var ap2 = 4;
console.log("Ap2: " + ap2);

var notas = (ap1 + ap2);
console.log("Média: " + notas / 2);


//Informe o nome e a idade de uma pessoa e imprima se esta pessoa é maior ou menor de idade.
var idade = 10;
console.log(`Sua idade é de ${idade} anos!`);

if (idade >= 18) {
    console.log("Você é maior de idade!")
} else {
    console.log("Você é de menor!!")
}


//Informe 3 números e mostre qual é o maior.
var num1 = 11;
console.log(num1);

var num2 = 20;
console.log(num2);

var num3 = 8;
console.log(num3);

var maior = num1;

if (num2 > maior)
    maior = num2;
if (num3 > maior)
    maior = num3;

console.log(`O número maior é ${maior}`);
