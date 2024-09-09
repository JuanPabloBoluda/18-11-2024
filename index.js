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

const idadeComprador = 17;

if(idadeComprador >=18){
  console.log("comprador maior de idade");
  console.log("destinos disponíveis: " + listaDeDestinos);
} else{

(idadeComprador < 18){
  console.log("Não é permitido comprar a passagem para menores de idade");
  console.log ("você é menor de idade");
}
