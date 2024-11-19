const prompt = require('prompt-sync');
const entrada = prompt();

const anoNascimento = 2005;
let idade = 19;
let anoAtual = 2024;
const nomeCompleto = "Juan Pablo"; 


console.log("Meu nome é", nomeCompleto + " Nascido em " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos");

anoAtual =  anoAtual + 1;


console.log(anoAtual);

idade = idade + 1  
console.log (idade);


console.log ("-----------------------------------------");
console.log ("-------------Âgencia de viagens----------");
console.log ("-----------------------------------------");
console.log ("                                         ");

console.log ("-----------------------------------------");
console.log ("--------------Area de login--------------");
console.log ("-----------------------------------------");
console.log ("                                         ");

//Agencia de viagens paris, Canadá, Dubai, Maldivas, tokyo 
const listaDeDestinos = new Array( 
  "Paris", 
  "Canadá", 
  "Dubai", 
  "Maldivas", 
  "Tokyo" 
);

const loginCerto = "Juan";
const senhaCerta = 1234;

var login = entrada("Qual é o seu username?");
var senha = entrada("Qual é a sua senha?");

while (login != loginCerto || senha != senhaCerta){
  console.log ("Login ou senha incorretos");
  login = entrada("Qual é o seu username?");
  senha = entrada("Qual é a sua senha?");
}
console.log ("");
console.log ("-----------------------------------------");
console.log ("-------------Identificação---------------");
console.log ("-----------------------------------------");
console.log ("                                         ");

var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador = entrada("Qual a sua idade?");


console.log ("");
console.log ("-----------------------------------------");
console.log ("-------------Lista de vôos---------------");
console.log ("--------------Disponiveis----------------");
console.log ("-----------------------------------------");
console.log ("");

if(idadeComprador >=18){
  console.log ("Olá senhor(a) " + nomeComprador);
  console.log("comprador maior de idade");
  console.log("Escolha seu destino: ");
  var contador = 0;

  
  while(contador <5){

    console.log(listaDeDestinos[contador]);
    contador++

  }
  var destino = entrada("Digite o numero que corresponde ao destino selecionado (1-5): ");
  console.log (`destino selecionado foi: ${listaDeDestinos[destino]}`);
}

else {
console.log(`Idade informada é ${idadeComprador}, menor que 18. Não é permitido visualizar a lista de destinos.`);
}
