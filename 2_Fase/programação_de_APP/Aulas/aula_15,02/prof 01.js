
let text = "Receba! Graças a Deus!";
let nome = "Kauam Luiz";
let sobrenome = "Vieira De Souza";
let idade = 16;

//console.log(nome + " " + sobrenome + ", " + "idade:" + idade);

var a = 15;
var b = 10;
var c = 20;

//console.log(a + b + c);



// function sayHi(nome, sobrenome) {
//   console.log("Olá, " + nome + " " + sobrenome);
// }

// sayHi(nome, sobrenome)



// function Soma(a,b){
//   var resultado = a + b,
// }

// Soma(a,b),

//console.log(resultado)


// function dobrador(num){
//   console.log(num * 2);
// }

// dobrador(100);
// dobrador(200);
// dobrador(300);
// dobrador(400);
// dobrador(500);


// NESTED FUNCTION

function formatadorDePessoas(primeiroNome, ultimoNome, idade){
  
  function formatadorDeNome(nome, sobrenome){
    const nomeCompleto = nome + " " + sobrenome;
    return nomeCompleto;
  }
  
  function formatadorDeObjeto(nomeCompleto, idade){
    const objetoFormatado = {
      nome: nomeCompleto,
      idade: idade
      
    }
    
    return objetoFormatado;
    
  }
  
  const nomeCompleto = formatadorDeNome(primeiroNome, ultimoNome);
  return formatadorDeObjeto(nomeCompleto, idade)
  
}

console.log(formatadorDePessoas("Kauam Luiz", "Vieira de souza", 16))



// const Lista = ["pão", "hamburguer", "pizza", "batata frita", "cerveja"];

// console.log(Lista[4])



const users = [
  {nome: "Chris", idade: 60},
  {nome: "Jane", idade: 30},
  {nome: "Billy", idade: 45}
];


function mapearNomes(lista){
  const listaDeNomes = lista.map(
    function(user){
      return user.nome
    }
  )
  return listaDeNomes
}

//console.log(mapearNomes(users))



//forma resumida |

const mapearNomes = (users) =>
  users.map((user) => user.nome + ": " + user.idade);


console.log(mapearNomes(users))

