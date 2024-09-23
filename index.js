const prompt = require('prompt-sync');
const entrada = prompt();

const anoNascimento = 2005;
let idade = 18;
let anoAtual = 2023;
const nomeCompleto = "Juan Pablo"; 
anoAtual =  anoAtual + 1;

console.log("Meu nome é", nomeCompleto + " Nascido em " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos");


console.log(anoAtual);

idade = idade + 1  
console.log (idade);


//Agencia de viagens paris, Canadá, Dubai, Maldivas, tokyo 
const listaDeDestinos = new Array( 
  "Paris", 
  "Canadá", 
  "Dubai", 
  "Maldivas", 
  "Tokyo" 
);

var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador = entrada("Qual a sua idade?");

if(idadeComprador >=18){
  console.log ("Olá senhor(a) " + nomeComprador);
  console.log("comprador maior de idade");
  console.log("Escolha seu destino: ");
  var contador =0;

  while(contador <5){

    console.log(listaDeDestinos[contador]);
    contador++

  }
  var destino = entrada("Digite o numero que corresponde ao destino selecionado (0-5): ");
  console.log (`destino selecionado foi: ${listaDeDestinos[destino]}`);
}


