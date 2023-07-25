-- APAGANDO O BANCO DE DADOS CASO EXISTA
DROP DATABASE IF EXISTS ATIVIDADE_11;

-- CRIANDO O BANCO DE DADOS
CREATE DATABASE ATIVIDADE_11;

-- CONECTANDO BANCO DE DADOS
USE ATIVIDADE_11;

-- CRIANDO AS TABELAS
CREATE TABLE COMPUTADOR(
	IDCOMPUTADOR INT NOT NULL
    ,NUMERO VARCHAR(15)
    ,FABRICANTE VARCHAR(100)
    ,MODELO VARCHAR(45)
    ,PRIMARY KEY (IDCOMPUTADOR)
);

CREATE TABLE REDE(
	IDREDE INT NOT NULL
    ,ENDERECO VARCHAR(45)
    ,MASCARA_REDE VARCHAR(45)
    ,DEPARTAMENTO VARCHAR(45)
    ,NOME_DEPARTAMENTO VARCHAR(45)
    ,RAMAL VARCHAR(45)
    ,RESPONSAVEL VARCHAR(100)
    ,IDCOMPUTADOR INT NOT NULL
    ,PRIMARY KEY (IDREDE)
    ,FOREIGN KEY (IDCOMPUTADOR) REFERENCES COMPUTADOR (IDCOMPUTADOR)
);

