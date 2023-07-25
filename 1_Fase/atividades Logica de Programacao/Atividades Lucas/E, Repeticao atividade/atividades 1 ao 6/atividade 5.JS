//5) Joãozinho mede 1,75m de altura e cresce 1cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3cm por ano. Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.

let AlturaJoaozinho = 1.75, AlturaPedrinho = 1.60
let CresceJoaozinho = 0.01, CrescePedrinho = 0.03
let Anos = 0

    while(AlturaPedrinho < AlturaJoaozinho){

        AlturaJoaozinho += CresceJoaozinho
        AlturaPedrinho += CrescePedrinho
        Anos++

    }

    alert(`Pedrinho sera mais alta que Joaozinho em ${Anos} anos`)