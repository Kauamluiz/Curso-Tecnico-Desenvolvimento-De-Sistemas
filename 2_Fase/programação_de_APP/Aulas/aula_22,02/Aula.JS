//////////////// Exemplo sem class //////////////////////////////////////////////////////////////////////////////////////////////


// function Pessoa(nome, idade){
  
//     this.nome = nome;
//     this.idade = idade;
    
//   }
  
//   Pessoa.prototype.saudacao = function() {
    
//     console.log(`Olá, ${this.nome}`);
    
//   }
  
//   function Empregado(nome, idade, cargo){
    
//     Pessoa.call(this, nome, idade);
//     this.cargo = cargo;
    
//   }
  
//   Empregado.prototype = Object.create(Pessoa.prototype);
  
//   const Kauam = new Empregado("Kauam", 16, "Estudante");
  
//   Kauam.saudacao();



/////////////// Exemplo com class /////////////////////////////////////////////////////////////////////////////////////////////



// class Pessoa {
//     constructor(nome, idade){
      
//       this.nome = nome;
//       this.idade = idade;
      
//     }
//     saudacao(){
      
//       console.log(`Olá, ${this.nome}`);
      
//     }
    
//   }
  
  
  
//   const maria = new Pessoa("Maria", 20);
//   const joao = new Pessoa("Joao", 22);
  
//   maria.mandar = function(escravo){
    
//     console.log(`Vá fazer alguma coisa ${escravo.nome}, você tem apenas ${escravo.idade} anos!`);
    
//   }
  
  
  
//   joao.obedecer = function(patroa){
    
//     console.log(`Sim, ${patroa.nome}!`);
    
//   }
  
  
  
//   maria.mandar(joao);
//   joao.obedecer(maria);


