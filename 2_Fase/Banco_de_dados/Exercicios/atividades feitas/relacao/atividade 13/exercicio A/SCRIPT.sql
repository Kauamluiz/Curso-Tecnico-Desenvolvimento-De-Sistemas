-- APAGANDO O BANCO DE DADOS CASO EXISTA
DROP DATABASE IF EXISTS ATIVIDADE_13_A;

-- CRIANDO O BANCO DE DADOS
CREATE DATABASE ATIVIDADE_13_A;

-- CONECTANDO BANCO DE DADOS
USE ATIVIDADE_13_A;

-- CRIANDO AS TABELAS
create table MEDICO (
	IDmedico int not null
    ,nome varchar(45)
    ,CRM int
    ,primary key (IDmedico)
);

create table PACIENTE (
	IDpaciente int not null
    ,nome varchar (45)
    ,primary key (IDpaciente)
);

create table CONSULTA (
	IDmedico int not null
	,IDpaciente int not null
    ,primary key (IDmedico, IDpaciente)
    ,foreign key (IDmedico) references MEDICO (IDmedico)
    ,foreign key (IDpaciente) references PACIENTE (IDpaciente)
);