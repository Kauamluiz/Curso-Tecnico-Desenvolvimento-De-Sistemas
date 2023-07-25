//////////////////////////////////// exemplo de extenção ///////////////////////////////////////////////////////////////////////////////

// class Pessoa{
//     constructor(nome, idade){
//       this.nome = nome;
//       this.idade = idade;
      
//     }
//     saudacao(){
//       return "Olá, eu sou uma pessoa";
      
//     }
    
// }
  
  

  
  
// class Empregado extends Pessoa {
//     constructor(nome, idade, cargo){
//       super(nome, idade);
//       this.cargo = cargo;
//     }
//     saudacaoDoEmpregado(){
//       const saudacaoHerdada = super.saudacao();
//       console.log(`${saudacaoHerdada} trabalhadora! Meu nome é ${this.nome}.`);
      
//     }
    
// }
  
//   // const kauam = new Empregado("kauam", 16, "estudante");
//   // kauam.saudacaoDoEmpregado();
  
  
  

  
// class Cliente extends Pessoa{
//     constructor({nome="cliente", idade="n/I", contato, saldo=0}){
//       super(nome, idade)
//       this.contato = contato;
//       this.saldo = saldo;
    
//     }
//     extrato(){
//       console.log(`O saldo atual de ${this.nome} é ${this.saldo}.`);
    
//     }
//     creditar(quantia){
//       this.saldo += quantia;
//       console.log(`O saldo atual de ${this.nome} é ${this.saldo}.`);
    
//     }
//     debitar(quantia){
//       this.saldo -= quantia;
//       console.log(`O saldo atual de ${this.nome} é ${this.saldo}.`);
    
//     }
//     static transferir(origem, destino){
//       const quantia = origem.saldo;
//       destino.saldo += quantia;
//       origem.saldo -= quantia;
//       console.log(`O saldo atual de ${destino.nome} é ${destino.saldo}.`);
//       console.log(`O saldo atual de ${origem.nome} é ${origem.saldo}.`);
    
//     }
    
// }
  
  
// const bob = new Cliente({nome: "Bob", idade: 25, contato: "celular", saldo: 500});
// const jane = new Cliente({nome: "Jane", contato: "email"});


// Cliente.transferir(bob, jane);


// bob.extrato();
// bob.creditar(500);
// bob.debitar(1000);




////////////////////////////// exemplo sem vetro(arrya) ///////////////////////////////////////////////////////////////////////////////////////////

// class Pessoa{
//   constructor(nome, idade){
//     this.nome = nome;
//     this.idade = idade;
    
//   }
//   saudacao(){
//     return "Olá, eu sou uma pessoa";
    
//   }
  
// }




// class Empregado extends Pessoa {
//   constructor(nome, idade, cargo){
//     super(nome, idade);
//     this.cargo = cargo;
//   }
//   saudacaoDoEmpregado(){
//     const saudacaoHerdada = super.saudacao();
//     console.log(`${saudacaoHerdada} trabalhadora! Meu nome é ${this.nome}.`);
    
//   }
  
// }

// // const kauam = new Empregado("kauam", 16, "estudante");
// // kauam.saudacaoDoEmpregado();




// class Cliente extends Pessoa{
//     constructor({nome="cliente", idade="n/I", contato, saldo=0}){
//       super(nome, idade)
//       this.contato = contato;
//       this.saldo = saldo;
    
//     }
//     extrato(){
//       console.log(`O saldo atual de ${this.nome} é ${this.saldo}.`);
    
//     }
//     creditar(quantia){
//       this.saldo += quantia;
//       console.log(`O saldo atual de ${this.nome} é ${this.saldo}.`);
    
//     }
//     debitar(quantia){
//       this.saldo -= quantia;
//       console.log(`O saldo atual de ${this.nome} é ${this.saldo}.`);
    
//     }
//     static transferir(origem, destino, quantia){
//       destino.saldo += quantia;
//       origem.saldo -= quantia;
//       console.log(`O saldo atual de ${destino.nome} é ${destino.saldo}.`);
//       console.log(`O saldo atual de ${origem.nome} é ${origem.saldo}.`);
    
//     }
//     static relatorioClientes(...clientes){
//       for(const cliente of clientes){
//         console.log(`${cliente.nome} possui R$${cliente.saldo}`)

//       }

//     }
  
// }



// const bob = new Cliente({nome: "Bob", idade: 25, contato: "celular", saldo: 500});
// const jane = new Cliente({nome: "Jane", contato: "email", saldo: 200});
// const billy = new Cliente({nome: "Billy", contato: "pager", saldo: 1000});


// Cliente.relatorioClientes(bob, jane, billy);

// Cliente.transferir(bob, jane, 300);

// bob.extrato();
// bob.creditar(500);
// bob.debitar(1000);




////////////////////// exemplo com vetor(arrya) /////////////////////////////////////////////////////////////////////////////////////////////////


// class Pessoa{
//     constructor(nome, idade){
//       this.nome = nome;
//       this.idade = idade;
    
//     }
//     saudacao(){
//       return "Olá, eu sou uma pessoa";
    
//     }
  
// }




// class Empregado extends Pessoa {
//     constructor(nome, idade, cargo){
//       super(nome, idade);
//       this.cargo = cargo;
//     }
//     saudacaoDoEmpregado(){
//       const saudacaoHerdada = super.saudacao();
//       console.log(`${saudacaoHerdada} trabalhadora! Meu nome é ${this.nome}.`);
    
//     }
  
// }

// // const kauam = new Empregado("kauam", 16, "estudante");
// // kauam.saudacaoDoEmpregado();




// class Cliente extends Pessoa{
//     constructor({nome="cliente", idade="n/I", contato, saldo=0}){
//       super(nome, idade)
//       this.contato = contato;
//       this.saldo = saldo;
    
//     }
//     extrato(){
//       console.log(`O saldo atual de ${this.nome} é ${this.saldo}.`);
    
//     }
//     creditar(quantia){
//       this.saldo += quantia;
//       console.log(`O saldo atual de ${this.nome} é ${this.saldo}.`);
    
//     }
//     debitar(quantia){
//       this.saldo -= quantia;
//       console.log(`O saldo atual de ${this.nome} é ${this.saldo}.`);
    
//     }
//     static transferir(origem, destino, quantia){
//       destino.saldo += quantia;
//       origem.saldo -= quantia;
//       console.log(`O saldo atual de ${destino.nome} é ${destino.saldo}.`);
//       console.log(`O saldo atual de ${origem.nome} é ${origem.saldo}.`);
    
//     }
//     static relatorioClientes(clientes){
//       for(i in clientes){
//         console.log(`${clientes[i].nome} possui R$${clientes[i].saldo}`)

//       }
//     }
  
// }
 
 
 
// const bob = new Cliente({nome: "Bob", idade: 30, contato: "celular", saldo: 500});
// const jane = new Cliente({nome: "Jane", idade: 25, contato: "email", saldo: 200});
// const billy = new Cliente({nome: "Billy", idade: 28, contato: "pager", saldo: 1000});
 
 
// Cliente.relatorioClientes([bob, jane, billy]);
 
 //Cliente.transferir(bob, jane, 300);
 
 // bob.extrato();
 // bob.creditar(500);
 // bob.debitar(1000);
 
 
 /////////////////////// ultimo exemplo da aula //////////////////////////////////////////////////////////////


//  class MembroFamiliar {
//     constructor(ultimoNome, primeiroNome, relacionamento){
//       this.ultimoNome = ultimoNome;
//       this.primeiroNome = primeiroNome;
//       this.relacionamento = relacionamento;
      
//     }
    
    
//   }
  
//   const gepeto = new MembroFamiliar ("daMadeira", "Gepeto", "pai")
  
//   class GrupoFamiliar {
//     constructor(pais=[]){
//       this.pais = pais;
//       this.filhos = [];
      
//     }
//     adicionarMembro (membro){
//       this.filhos.push(membro);
      
//     }
    
//   }
  
//   const will = new MembroFamiliar ("Smith", "Will", "dad");
//   const jada = new MembroFamiliar ("Smith", "Jada", "mom");
//   const jaden = new MembroFamiliar ("Smith", "Jeden", "son");
  
//   const theSmiths = new GrupoFamiliar ([will, jada]);
  
//   theSmiths.adicionarMembro(jaden);
//   console.log(theSmiths);
  