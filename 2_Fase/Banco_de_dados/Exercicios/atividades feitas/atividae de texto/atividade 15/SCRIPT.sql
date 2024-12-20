-- APAGANDO O BANCO DE DADOS CASO EXISTA
DROP DATABASE IF EXISTS ATIVIDADE_15;

-- CRIANDO O BANCO DE DADOS
CREATE DATABASE ATIVIDADE_15;

-- CONECTANDO BANCO DE DADOS
USE ATIVIDADE_15;

-- CRIANDO AS TABELAS
CREATE TABLE CRIMINOSO (
	IDCRIMINOSO INT NOT NULL
    ,NOME VARCHAR(100)
    ,DTNASCIMENTO DATE
    ,PRIMARY KEY (IDCRIMINOSO)
);

CREATE TABLE VITIMA (
	IDVITIMA INT NOT NULL
    ,NOME VARCHAR(100)
    ,DTNASCIMENTO DATE
    ,PRIMARY KEY (IDVITIMA)
);

CREATE TABLE CRIME (
	IDCRIME INT NOT NULL
    ,DESCRICAO VARCHAR(200)
    ,DTCRIME DATETIME
    ,PRIMARY KEY (IDCRIME)
);

CREATE TABLE ARMA (
	IDARMA INT NOT NULL
    ,TIPO VARCHAR(45)
    ,NUMERO_IDENTIFICADOR VARCHAR(45)
    ,PRIMARY KEY (IDARMA)
);

CREATE TABLE ATACAR (
	IDCRIMINOSO INT NOT NULL
    ,IDVITIMA INT NOT NULL
    ,PRIMARY KEY (IDCRIMINOSO, IDVITIMA)
    ,FOREIGN KEY (IDCRIMINOSO) REFERENCES CRIMINOSO (IDCRIMINOSO)
    ,FOREIGN KEY (IDVITIMA) REFERENCES VITIMA (IDVITIMA)
);

CREATE TABLE COMETER (
	IDCRIMINOSO INT NOT NULL
    ,IDCRIME INT NOT NULL
    ,PRIMARY KEY (IDCRIMINOSO, IDCRIME)
    ,FOREIGN KEY (IDCRIMINOSO) REFERENCES CRIMINOSO (IDCRIMINOSO)
    ,FOREIGN KEY (IDCRIME) REFERENCES CRIME (IDCRIME)
);

CREATE TABLE SOFRER (
	IDVITIMA INT NOT NULL
    ,IDCRIME INT NOT NULL
	,PRIMARY KEY (IDVITIMA, IDCRIME)
    ,FOREIGN KEY (IDVITIMA) REFERENCES VITIMA (IDVITIMA)
    ,FOREIGN KEY (IDCRIME) REFERENCES CRIME (IDCRIME)
);

CREATE TABLE USAR (
	IDCRIME INT NOT NULL
	,IDARMA INT NOT NULL
    ,PRIMARY KEY (IDCRIME, IDARMA)
    ,FOREIGN KEY (IDCRIME) REFERENCES CRIME (IDCRIME)
    ,FOREIGN KEY (IDARMA) REFERENCES ARMA (IDARMA)
);